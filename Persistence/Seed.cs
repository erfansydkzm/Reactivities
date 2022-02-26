using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;

            var activities = new List<Activity>
            {
                 new Activity{
                    Title="Past Activity 1",
                    Date=DateTime.Now.AddMonths(-2),
                    Description="Activity 2 Months Ago",
                    Category="drinks",
                    City="London",
                    Venue="Pub"
                },
                new Activity{
                    Title="Past Activity 2",
                    Date=DateTime.Now.AddMonths(-1),
                    Description="Activity 1 Months Ago",
                    Category="culture",
                    City="Paris",
                    Venue="Pub"
                },
                new Activity{
                    Title="Future Activity 1",
                    Date=DateTime.Now.AddMonths(1),
                    Description="Activity 1 Months Future",
                    Category="culture",
                    City="Berlin",
                    Venue="Pub"
                },
                new Activity{
                    Title="Future Activity 2",
                    Date=DateTime.Now.AddMonths(2),
                    Description = "Activity 2 Months Future",
                    Category="",
                    City="Tokyo",
                    Venue="Cinema"
                },
                new Activity{
                    Title="Past Activity 3",
                    Date=DateTime.Now.AddMonths(3),
                    Description="Activity 3 Months Ago",
                    Category="drinks",
                    City="London",
                    Venue="Pub"
                },
                new Activity{
                    Title="Past Activity 4",
                    Date=DateTime.Now.AddMonths(4),
                    Description="Activity 4 Months Ago",
                    Category="culture",
                    City="Paris",
                    Venue="Pub"
                },
                new Activity{
                    Title="Future Activity 5",
                    Date=DateTime.Now.AddMonths(5),
                    Description="Activity 5 Months Future",
                    Category="culture",
                    City="Berlin",
                    Venue="Pub"
                },
                new Activity{
                    Title="Future Activity 6",
                    Date=DateTime.Now.AddMonths(6),
                    Description = "Activity 6 Months Future",
                    Category="",
                    City="Tokyo",
                    Venue="Cinema"
                }
            };
            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}