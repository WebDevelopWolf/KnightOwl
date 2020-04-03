namespace KnightOwl.API.Models
{
    public class ModuleLink
    {
        public int ModuleLinkId { get; set; } // SubModuleId (Primary key)
        public string ModuleLinkTitle { get; set; } // SubModuleTitle (length: 50)
        public string RouterLink { get; set; } // RouterLink (length: 100)
        public bool Enabled { get; set; } // Enabled
        public Module Module { get; set; }
        public int ModuleId { get; set; }
    }
}