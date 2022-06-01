using System.Net;
using System.Text.Json;
using Application.Core;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        public RequestDelegate _next;
        public ILogger<ExceptionMiddleware> _logger;
        public IHostEnvironment _env;
        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment env)
        {
            _next = next;
            _logger = logger;
            _env = env;
        }

        public async Task InvokeAsync(HttpContext content)
        {
            try
            {
                await _next(content);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                content.Response.ContentType = "application/json";
                content.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                var response = _env.IsDevelopment() ? new AppException(content.Response.StatusCode, ex.Message, ex.StackTrace?.ToString()) : new AppException(content.Response.StatusCode, "Server Error");

                var option = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

                var json = JsonSerializer.Serialize(response, option);

                await content.Response.WriteAsync(json);
            }
        }
    }
}