using System.Collections.Generic;

namespace KnightOwl.API.Models
{
    public class Module
    {
        public int ModuleId { get; set; } // ModuleId (Primary key)
        public string ModuleTitle { get; set; } // ModuleTitle (length: 50)
        public string RouterLink { get; set; } // RouterLink (length: 100)
        public string FaIcon { get; set; } // FaIcon (length: 50)
        public bool Enabled { get; set; } // Enabled
        public string Description { get; set; } // Description (length: 250)
        public string Instruction { get; set; } // Instruction (length: 250)
        public int ViewOrder { get; set; } // ViewOrder
        public ICollection<ModuleLink> SubModules { get; set; }
    }
}