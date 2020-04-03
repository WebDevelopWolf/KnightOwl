namespace KnightOwl.API.Dtos
{
    public class ModulesForNavDto
    {
        public int ModuleId { get; set; } // ModuleId (Primary key)
        public string ModuleTitle { get; set; } // ModuleTitle (length: 50)
        public string RouterLink { get; set; } // RouterLink (length: 100)
        public string FaIcon { get; set; } // FaIcon (length: 50)
        public int ViewOrder { get; set; } // ViewOrder
    }
}