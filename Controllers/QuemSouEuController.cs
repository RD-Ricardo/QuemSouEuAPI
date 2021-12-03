using System;
using Microsoft.AspNetCore.Mvc;
using QuemSouEuAPI.Models;

namespace QuemSouEuAPI.Controllers 
{
    [ApiController]
    [Route("[controller]")]
    public class QuemSouEuController : Controller
    {

        public IActionResult Get()
        {
            return Ok(new User
            {
                Nome = "Ricardo",
                SobreNome = "Dias",
                UrlGitHub =  "https://www.github.com/RD-Ricardo"
            });
        }
    }

}