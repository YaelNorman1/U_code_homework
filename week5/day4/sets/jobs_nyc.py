import json 
with open('C:/Users/Rent/code/bootcamp/exercieses/week5/day4/sets/nyc_jobs.json', 'r') as f:
    data = json.load(f)

def find_jobs_by_word(text):
    jobs = [job for job in data if text in job.get("job_description") ]
    return jobs

def junior_job():
    entry_level_1 = set([job["agency"] for job in data if job["career_level"] == "Entry-Level"]) # [job for job in data if int(job.get("level")) <= 1 ]
    located_brodway = set([job["agency"] for job in data if "Broadway" in job["work_location"]])
    
    return entry_level_1 & located_brodway


print(junior_job())
# print(len(find_jobs_by_word("experience"))) # 165