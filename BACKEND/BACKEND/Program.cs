namespace BACKEND
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();

            //builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            app.UseRouting();
            app.MapControllerRoute(name: "default", pattern: "{controller}/{action=Index}/{id?}");

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            //app.UseHttpsRedirection();
            //app.UseAuthorization();
            //app.MapControllers();

            app.UseCors(x => x
            .AllowCredentials()
            .AllowAnyMethod()
            .AllowAnyHeader()
            .WithOrigins("http://192.168.8.162:5500", "http://192.168.0.169:5500"));


            app.Run();
        }
    }
}
