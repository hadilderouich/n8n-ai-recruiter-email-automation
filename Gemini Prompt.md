Write a professional, concise, personalized cold job application email.

RECIPIENT EMAIL:
{{ $json.email }}

COMPANY NAME:
{{ $json.companyName }}

CANDIDATE:
Name: HADIL DEROUICH
Title: Computer Engineer | Business Intelligence · Data & AI · LLM/RAG
Location: Tunis, Tunisia
Availability: Immediately

TARGET ROLES:
Data Engineer, Data Analyst, Business Intelligence, AI/ML Engineer, LLM/RAG Engineer, Software Engineer, Backend Engineer, Full-Stack Developer, n8n/Automation Engineer.

CORE SKILLS:
Python, SQL, Power BI, ETL, Data Modeling, PostgreSQL, React, Next.js, Node.js, REST APIs, Docker, Git, n8n, LLMs, RAG, NLP, Machine Learning.

RECENT EXPERIENCE:
Software Engineer — Telegencia Labs, Tunis, 01/2026–07/2026.
Developed HireCue, an AI-powered recruitment platform. Built 12 n8n workflows integrating LLM/RAG, REST APIs, PhantomBuster and UniPile for sourcing, prospecting and LinkedIn publishing. Built 3 Power BI dashboards for recruitment KPIs. Worked with PostgreSQL, Docker, React, TypeScript and Node.js.

OTHER EXPERIENCE:
Frontend & Integration Developer — HikmaWare, 06/2025–08/2025.
Worked with Next.js, React, TypeScript and REST APIs.

Full-Stack Developer — MS Transport, 02/2023–05/2023.
Developed a logistics platform using React and Flutter.

EDUCATION:
Engineering Degree in Computer Science — Business Intelligence, ESPRIT, 2023–2026.

LOCATION & INTEREST:
Based in Tunis, Tunisia.
Available immediately.
Interested in professional opportunities in Saudi Arabia.

GREETING RULE:

If companyName is provided and not empty, write exactly:

Dear {{ $json.companyName }} Hiring Team,

If companyName is empty, unknown, or the recipient uses a generic email provider such as Gmail, Hotmail, Outlook, Yahoo, iCloud, or ProtonMail, write exactly:

Dear Hiring Team,

Never use the email provider name as the company name.

Never infer a company name from a personal or generic email address.

Never use values such as Gmail, Hotmail, Outlook, Yahoo, iCloud, ProtonMail, or similar email providers as company names.

Examples:

[cv@Arabianfal.com](mailto:cv@Arabianfal.com)
→ Dear Arabianfal Hiring Team,

[Job.s6@hotmail.com](mailto:Job.s6@hotmail.com)
→ Dear Hiring Team,

[recruitment@gmail.com](mailto:recruitment@gmail.com)
→ Dear Hiring Team,

[hr@company.com](mailto:hr@company.com)
→ Dear Company Hiring Team,

WRITING INSTRUCTIONS:

1. This is a spontaneous application. Never claim that the company is hiring or has an open position.

2. Use the GREETING RULE above. Do NOT write "Dear Hadil".

3. Keep the email concise: 110–140 words.

4. Use 3–4 short paragraphs:

* Brief introduction and target area.
* Most relevant experience and achievements.
* Availability and interest in Saudi Arabia.
* Resume reference and call to action.

5. Personalize the content using the company name and recipient email/domain when useful, but NEVER invent information about the company.

6. Select only the most relevant technical skills. Do not list the entire CV.

7. Prioritize the strongest recent experience: Telegencia Labs, n8n, LLM/RAG, Power BI, SQL, PostgreSQL, REST APIs and software engineering.

8. Mention immediate availability.

9. Mention interest in opportunities in Saudi Arabia.

10. Use natural professional English. Avoid exaggerated claims, clichés, and generic AI-sounding language.

11. Do not invent:

* job vacancies
* recruiter names
* company activities
* projects
* technologies
* qualifications
* achievements

12. Do NOT generate the Resume URL.

13. Do NOT use Markdown links.

14. Do NOT write:
    [Resume](...)
    or
    [Resume]\(...\)

15. Instead, write exactly:
    "You can find further details in my Resume."

16. Do not use bullet points in the email.

17. End with:

Best regards,

Hadil Derouich
Computer Engineer | Data & AI | LLM/RAG | BI
Tunis, Tunisia

OUTPUT ONLY:

Subject: [subject]

[Email body]

Do not include explanations, notes, markdown code fences, or anything before or after the email.
