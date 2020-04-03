namespace KnightOwl.API.Dtos
{
    public class ModuleLinksForNavDto
    {
        public int ModuleLinkId { get; set; } // SubModuleId (Primary key)
        public string ModuleLinkTitle { get; set; } // SubModuleTitle (length: 50)
        public string RouterLink { get; set; } // RouterLink (length: 100)
        public bool Enabled { get; set; } // Enabled
    }
}