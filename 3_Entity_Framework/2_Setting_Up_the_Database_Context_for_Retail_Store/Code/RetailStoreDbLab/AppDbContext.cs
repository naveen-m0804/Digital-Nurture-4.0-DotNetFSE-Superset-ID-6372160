using Microsoft.EntityFrameworkCore;
using RetailStoreDbLab.Models;

namespace RetailStoreDbLab
{
    public class AppDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                "Server=NAVEEN\\SQLEXPRESS;Database=RetailStoreDb;Trusted_Connection=True;TrustServerCertificate=True;");
        }
    }
}
