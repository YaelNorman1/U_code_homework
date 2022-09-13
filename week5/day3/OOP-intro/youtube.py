# import string

class YouTubeLessonManager:
    def __init__(self) :
        self.lessons= {}

    def save (self, name, url):
        name= name.lower()
        name= ''.join(e for e in name if e.isalnum())
        self.lessons.update({name:url})

    def get(self, lesson_name):
        result =[]
        lesson_name= ''.join(e for e in lesson_name if e.isalnum())
        lesson_name = lesson_name.lower()
        for lesson in self.lessons:
            if lesson_name in lesson:
                result.append(self.lessons.get(lesson))
        return result


lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
print(lesson_manager.get("for-loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 
print(lesson_manager.get("for loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("for")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("loops")) # outputs ['https://www.youtube.com/watch?v=OnDr4J2UXSA', 'https://www.youtube.com/watch?v=6TEGxJXLAWQ']