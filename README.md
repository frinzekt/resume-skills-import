# HR Skill Reader ("Bot" Automation)

## Introduction
One of the task that is repetitive and is based on business rules and requirement is Human Resource Management specifically with finding out the skills of a specific candidate outlined in their resume and possibly in their cover letter. After finding the skills of the candidate, those skills are entered into a system or a database in which supposedly a human/employee will manually enter those data. This manual data entry takes a lot of time especially when hundreds or even thousands of skills are needed to be entred.

## Project Scope
This project is focused on trying to create a faster way into listing the skills of multiple candidate and entering it to a system. The solution that was chosen is Robotics Process Automation (RPA)

## Why this solution?
In comparison to creating a software that will read resume and use queries to import data:
 - traditional software creation requires connection of systems and may not be fully possible when the place where the data is entered is not owned by the creator of the software that will read the resume
 - full software integration is costly and requires a lot of time in development
 - human actions could be recorded directly and tweaked in order for a bot to do the repeated action with a few changes depending on requirement. This could not simply be done in most cases with software creation

## Description
Reads all resume in a folder and uploads both resume and cover letter (if present into the system). After uploading, the contents of the resume is stripped off conjuctions, connecting words, and common words in order to pick out unique skills that a person has. Using a percentage matching of the total words a skill has an the skill mentioned in the resume, the skill is determined to be in or not in possession of the candidate. Currently this project uses a 60% matching setting that determines wh

For example:
Skill: "Microsoft MS Viewer"
If the resume contained the words either "MS Viewer", "Microsoft Viewer" or any permutations of it, then is considered a skill of the candidate as the word matching will equate to `66%` which is more than `60%`. If the resume only contained words "Microsoft", "Viewer", "MS" which equates to `33%`, then it is not considered a skill of that candidate as that is less than `60%`.


## Limitation of HR Skill Reader
- skill lookup table is needed and filled up correctly with all possible skill a candidate can have
- the skill reader only enters the person has and does not fill out details such as educational background and qualifications
- accuracy to the skills of a person is found holding
- can only read pdfs (there is a separate mini-project I have done that is an extension of this project that converts ".doc", ".docx" to pdf that allows reading of the resume.
- can only read pdfs without images
    - during development, I had the option to either use pure text reading or OCR, but in the end I chose pure text reading as most of the time resumes don't have images. Furthermore, OCR decreases the word accuracy reading.
    
## How to Use
1. Use Automated Word Document to PDF converter for bulk importing
2. Collate resume and cover letter into the "Files" folder in the same directory as the bot executable or compiling files.
3. Make sure "skills" parameter is filled up
4. Adjust script to some custom functionality such as some custom clicks into some specific lookups or file pathing directory system for custom path.



