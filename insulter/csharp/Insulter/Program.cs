using System;
using System.Linq;
using System.Collections.Generic;

namespace Insulter
{
    class Program
    {
        static void Main()
        {
            string[] Insults = {
                "You look like what morning breath smells like.",
                "If you tried to give me cpr I would probably throw myself back under water",
                "I am not a fan of you",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
                "I'd rather walk than be on the same plane as you",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
                "Do you have to be so...like that?"
            };

            List<int> Indexes = new List<int>();
            while (Indexes.Count < 3)
            {
                var random = new Random();
                int candidate = random.Next(Insults.Length);
                if (!Indexes.Contains(candidate))
                {
                    Indexes.Add(candidate);
                }
            }

            for (int i = 0; i < Indexes.Count; i++)
            {
                int index = Indexes[i];
                Console.WriteLine(Insults[index]);
            }
        }
    }
}
