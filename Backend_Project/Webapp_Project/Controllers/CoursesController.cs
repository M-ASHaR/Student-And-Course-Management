using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Collections.Generic;
using Webapp_Project;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Xml.Linq;
using static System.Net.Mime.MediaTypeNames;
using Webapp_Project.Models;

namespace Webapp_Project.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : Controller
    {

        private readonly string _connectionString;
        public CoursesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConnectionS")!;
        }

        [HttpGet]
        public IActionResult GetAllCourses()
        {
            List<Courses> courses = new List<Courses>();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand("GetAllCourses", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        {
                            Courses course = new Courses();
                            course.CourseID = (int)reader["CourseID"];
                            course.CourseName = reader["CourseName"].ToString()!;
                            courses.Add(course);
                        };
                    }
                    connection.Close();
                }
            }
            return Ok(courses);
        }
        [HttpGet("{id}")]
        public IActionResult GetCourseById(int id)
        {
            Courses course = new Courses();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand("GetCourseById", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@CourseID", id);
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    if (reader.Read())//condition checking if there is atleast one row
                    {
                        course.CourseID = (int)reader["CourseID"];
                        course.CourseName = reader["CourseName"].ToString()!;
                    }
                    connection.Close();
                }
            }
            return Ok(course);
        }

        [HttpPost]
        public IActionResult AddCourses(Courses courses)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand("AddCourses", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@CourseID", courses.CourseID);
                    command.Parameters.AddWithValue("@CourseName", courses.CourseName);
                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();
                }
            }
            return Ok();
        }

        [HttpPost("{id}")]
        public IActionResult updateCourses(int id,Courses courses)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand("UpdateCourse", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@CourseID", courses.CourseID);
                    command.Parameters.AddWithValue("@CourseName", courses.CourseName);
                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();
                }
            }
            return Ok(courses);
        }


        [HttpDelete("{id}")]
            public IActionResult DeleteCourse(int id)
            {
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    using (SqlCommand command = new SqlCommand("DeleteCourse", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@CourseID", id);
                        connection.Open();
                        command.ExecuteNonQuery();
                        connection.Close();
                    }
                }
                return Ok();
            }
            
        
    }
}
