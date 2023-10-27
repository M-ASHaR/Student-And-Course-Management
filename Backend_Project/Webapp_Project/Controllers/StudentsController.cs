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
using System;

namespace Webapp_Project.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : Controller
    {
        private readonly string _connectionString;

        public StudentsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConnectionS");
        }
        [HttpGet]
        public IActionResult GetAllStudents()
        {
            List<Students> students = new List<Students>();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand("GetStudents", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        Students student = new Students();
                        
                        student.StudentID = (int)reader["StudentID"];
                        student.FirstName = reader["FirstName"].ToString();
                        student.LastName = reader["LastName"].ToString();
                        student.Age = (int)reader["Age"];
                        student.CourseID = reader["CourseID"]!=DBNull.Value?(int)reader["CourseID"]:0;
                        

                        students.Add(student);
                    }
                }
                connection.Close();
            }
            return Ok(students);
        }

        [HttpGet("{id}")]
        public IActionResult GetStudentById(int id)
        {
            Students students = new Students();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand("GetStudentById", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@StudentID", id);
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    if (reader.Read())
                    {
                        students.StudentID = (int)reader["StudentID"];
                        students.FirstName = reader["FirstName"].ToString()!;
                        students.LastName = reader["LastName"].ToString()!;
                        students.Age = (int)reader["Age"];
                        
                    }
                    connection.Close();
                }
                
            }
            return Ok(students);
        }


        [HttpPost]
        public IActionResult AddStudent(Students students)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand("AddStudent", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@StudentID", students.StudentID);
                    command.Parameters.AddWithValue("@FirstName", students.FirstName);
                    command.Parameters.AddWithValue("@LastName", students.LastName);
                    command.Parameters.AddWithValue("@Age", students.Age);
                    command.Parameters.AddWithValue("@CourseID", students.CourseID);
                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();
                }
                
            }
            return Ok();
        }


        


        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand("DeleteStudent", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@StudentID", id);
                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();
                }
            }
            return Ok();
        }
        
    }
}
