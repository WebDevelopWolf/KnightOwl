using System.Collections.Generic;
using KnightOwl.API.Models;

namespace KnightOwl.API.Dtos
{
    public class ModulesForSubNavDto
    {
        public int ModuleId { get; set; } // ModuleId (Primary key)
        public string ModuleTitle { get; set; } // ModuleTitle (length: 50)
        public string RouterLink { get; set; } // RouterLink (length: 100)
        public string FaIcon { get; set; } // FaIcon (length: 50)
        public bool Enabled { get; set; } // Enabled
        public string Description { get; set; } // Description (length: 250)
        public string Instruction { get; set; } // Instruction (length: 250)
        public ICollection<ModuleLinksForNavDto> SubModules { get; set; }
    }
}