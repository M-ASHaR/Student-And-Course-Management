using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Webapp_Project.Models
{
    public class Courses
    {
        //C# Courses model mirroring SQL Courses table structure
        [Key]
        public int CourseID { get; set; }
        [Required]
        public string CourseName { get; set; } = string.Empty;
    }
}
