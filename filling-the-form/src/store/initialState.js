export const initialState = {
  name: localStorage.getItem("name") || "Alexander",
  surname: localStorage.getItem("surname") || "Smirnov",
  telephone: localStorage.getItem("telephone") || "+79647438901",
  email: localStorage.getItem("email") || "a.smirnov@mail.ru",
  city: localStorage.getItem("city") || "Saint-Petersburg",
  street: localStorage.getItem("street") || "Abrosimova",
  home: localStorage.getItem("home") || "35",
  summary:
    localStorage.getItem("summary") ||
    "Date of birth: 01.04. 1981 Ready for business trips. Ready to move to Moscow. Objective: Head of Sales Department. Achievements: created sales department from scratch, developed and implemented the company's sales technology of the technically complicated equipment, under my supervision department (5 persons) regularly performed the plan of attracting new customers and sales, led the company 7 key customer (totally up to 50% of orders), developed and implemented the company's sales technology of the technically complicated equipment.",
  education:
    localStorage.getItem("education") ||
    `2003 Saint Petersburg State University of Economics and Finance, St. Petersburg Department of "Economics of Labor and Personnel Management" Specialty: "Personnel Management" Qualification: "Manager" (Graduated with honors);
    2003-2014 Visiting numerous seminars and training sessions for sales and customer service ("Cold calls", "Sales method SPIN», «Active sales", "Sales of services", "Tough negotiations", "Work with objections," etc. )
    `,
  experience:
    localStorage.getItem("experience") ||
    `10. 2008-07. 2014 Head of Sales Co.Ltd «ННН group» (www.nnn-grup.com), St. Petersburg
    `,
  skills:
    localStorage.getItem("skills") ||
    `Active sales, expansion of client base;
Working with key clients, work with objections;
Management sales team.`
};
