export default class CourseService{
     courses=[
        {code:"CS4549",title:"Learning React Components",id:1},
        {code:"CS4550",title:"Introduction to Javascript",id:2},
        {code:"CS4551",title:"Data Structures and Algorithms",id:3},
        {code:"CS4552",title:"Linear Algebra",id:4},
        {code:"CS4553",title:"Learning React Components",id:5},

    ]
    static myInstance=null
    static getInstance(){
        if(CourseService.myInstance==null){
            CourseService.myInstance=new CourseService()
        }
         return this.myInstance
    }
    findAllCourses(){
         return this.courses
    }
    createCourse(course){
         this.courses.push(course)
    }
    findCoursebyID(courseId){

         this.courses.find(course=>courseId)
    }
    deleteCourse(courseID){
         this.courses=this.courses.filter(course=>course.id !==courseID)
    }
    updateCourse(courseID,course){
         //----

    }
}
