using Microsoft.EntityFrameworkCore.Migrations;

namespace KnightOwl.API.Migrations
{
    public partial class AddedModulesAndLinks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Modules",
                columns: table => new
                {
                    ModuleId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ModuleTitle = table.Column<string>(nullable: true),
                    RouterLink = table.Column<string>(nullable: true),
                    FaIcon = table.Column<string>(nullable: true),
                    Enabled = table.Column<bool>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Instruction = table.Column<string>(nullable: true),
                    ViewOrder = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Modules", x => x.ModuleId);
                });

            migrationBuilder.CreateTable(
                name: "ModuleLinks",
                columns: table => new
                {
                    ModuleLinkId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ModuleLinkTitle = table.Column<string>(nullable: true),
                    RouterLink = table.Column<string>(nullable: true),
                    Enabled = table.Column<bool>(nullable: false),
                    ModuleId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModuleLinks", x => x.ModuleLinkId);
                    table.ForeignKey(
                        name: "FK_ModuleLinks_Modules_ModuleId",
                        column: x => x.ModuleId,
                        principalTable: "Modules",
                        principalColumn: "ModuleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ModuleLinks_ModuleId",
                table: "ModuleLinks",
                column: "ModuleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ModuleLinks");

            migrationBuilder.DropTable(
                name: "Modules");
        }
    }
}
