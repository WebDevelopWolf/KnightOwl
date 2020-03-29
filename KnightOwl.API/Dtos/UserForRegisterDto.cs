using System.ComponentModel.DataAnnotations;

namespace KnightOwl.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        [StringLength(15, MinimumLength = 8, ErrorMessage = "You must specify a password between 8 amd 15 characters")]
        public string Password { get; set; }
    }
}