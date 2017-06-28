var bio = {
	"name": "Rahul Dileep Jadhav",
	"role": "Passionate Python Programmer | Linux Enthusiast | Master's degree in Computer Networking",
	"contacts": {
		"mobile": "1-408-960-3629",
        "email": "rahuldileep@gmail.com",
        "github": "rahuldileep",
		"location": "San Jose"
	},
	"welcomeMessage": "Seeking full-time opportunities in Software Engineering / QA Automation Engineering",
    "skills": ["Python", "Linux", "Shell Scripting", "C", "C++", "MySQL","Embedded C","Protocols - TCP, UDP, OSPF, BGP, DHCP, DNS, HTTP"],
    "biopic": "images/RJ.jpg"
};

var work = {
	"jobs": [
		{
		"employer": "Enigma Technologies",
		"title": "Embedded Software Engineer",
		"location": "Pune, India",
		"dates": "May 2014 - August 2015",
		"description1": "-Designed & developed software of embedded devices for customer in automation and robotics industry.",
		"description2": "-Developed software for text-to-speech conversion and Smart Home systems.",
		"description3": "-Successfully implemented and tested the system software."
		
		}]
};


var projects =  {
 	"projects": [ {
 		"title": "Application to find your favorite Restaurant (Python, Google API, Foursquare API)",
 		"dates": "Feb 2017",
 		"description": "Developed an application which enables the user to find the name and address of the restaurant. User is asked to enter the name of the food and the place. Using Google geocoding API's, the longitude and latitude of the place entered will be brought and a similar will be passed on to Foursquare location API alongside the meal type. Subsequently, the restaurant Name, Address and the accessible picture is obtained."
 	}, {
 		"title": "Network Traffic Analyzer (Python, Google Earth, dpkt, Scapy )",
 		"dates": "December 2016",
 		"description": "Developed a powerful analysis tool to detect hackers location. Wrote a script, which geolocates the IP addresses recorded in a pcap network capture file. Output of the script is redirected to a text file with .kml extension which gives a visual depiction of the packet destination when opened in Google Earth. Wrote another script to detect the Nmap decoy scans which appeared to originate from various locations. This was achieved by analyzing the TTL field of the incoming packets from Nmap scans. "
 	}, {
 		"title": "IoT Based Bus Tracking System - Python, Google API, Raspberry Pi, GPS, AWS",
 		"dates": "December 2016",
 		"description": "Wrote optimized Python code to fetch the real-time Geo Coordinates of the Bus. Used Google API's to calculate the time for the bus to reach the bus stop and display the same."
 	}, {
 		"title": "Client Server based Parking Management System - (C, Multithreading, Mutex-Locks, Concurrency, MySQL)",
 		"dates": "April 2016",
 		"description": "Features involved: - Online reservation of parking slots prior to arrival - Time extension of already reserved slots - Manual reservation of parking slots"
 	},  {
 		"title": "Sign Language to Speech Conversion - Text to Speech Module,  Flex Sensors, Embedded C",
 		"dates": "August 2015",
 		"description": "Designed and developed software for a system that converts the sign language in to text and then to natural sound using multi-language voice synthesizer Emic 2 module. I was responsible for coding, sensor interfacing and user-experience shaping."
 	},  {
 		"title": "Chat Application - (C, UDP Socket)",
 		"dates": "March 2016",
 		"description": "Developed a chat application using UDP sockets with multiple client chat enabled"
 	}, {
 		"title": "Library Management System - (Bash Shell Scripting)",
 		"dates": "January 2016",
 		"description": "Features involved: - Add new books - Search book information - Edit book information - Remove books - View all books"
 	}, {
 		"title": "Implementation of Inter-VLAN Routing with Port Security",
 		"dates": "September 2015",
 		"description": "Used Cisco IOS tool for simulation of Inter-VLAN routing. Port security was achieved by limiting number of devices that can access the port and learning MAC addresses dynamically"
 	}, {
 		"title": "Touchscreen Operated Wireless Home Automation - (Embedded C, Atmel AVR Microcontroller, Analog Sensors, RF)",
 		"dates": "March 2015",
 		"description": "Home appliances were controlled using a touchscreen operated remote control with feedback system. RF tranceiver CC2500 was used for wireless communication"
 	}]
 };

var Achievements =  {
 	"Achievements": [{
 		"title": "National winner in Indian Robotics Challenge 2013",
 		"dates": "January 2013",
 		"description": "Won the National championship and entered International Robotics Challenge representing TEAM INDIA by defeating 81 teams."
 	}, {
 		"title": "Coordinator at India Heritage Foundation (IHF)- USA",
 		"dates": "September 2015 - present",
 		"description": "IHF is a non profit organization and I am an active Coordinator member in the current 80 acre multimillion dollar project at Milpitas CA"
 	}, {
 		"title": "Managing Head at Zeal Cyborg Club - Pune,India",
 		"dates": "June 2013 - June 2014",
 		"description": "Managed technical events organized by the club"
 	}]
 };

var education = {
	"schools": [
	{
		"name": "San Jose State University",
		"degrees": "     Master of Science",
		"major": "Electrical Engineering | Specialization - Computer Networking | GPA: 3.4",
		"dates": " 2015 - 2017 ",
		"Courses":"Data Structures and Algorithms, Internetworking, Network Security, Network Programming and Application",
		"Python":"Python - HackerRank Leaderboard Points - 2265 | RANK - 1",
		"Linux":"Linux Essentials - Linux Academy",
		"Bash":"BASH Certified Programming Course: Master the Linux Command Line - Udemy"
	}]
};


bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").prepend(formattedName, formattedRole).append(formattedBiopic, formattedMsg);

	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
};
education.display = function() {
	/* formatting strangely?*/
	$("#education").append(HTMLschoolStart);
	for (school in education.schools){
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degrees);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedcourses = HTMLschoolCourses.replace("%data%", education.schools[school].Courses);
		var formattedPython = HTMLschoolPython.replace("%data%", education.schools[school].Python);
		var formattedBash = HTMLschoolBash.replace("%data%", education.schools[school].Bash);
		var formattedLinux = HTMLschoolLinux.replace("%data%", education.schools[school].Linux);
		$(".education-entry:last").append(formattedName, formattedDates, formattedDegree, formattedMajor, formattedcourses,formattedPython,formattedBash,formattedLinux);
		}
};
work.display = function (){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTilte = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription1.replace("%data%", work.jobs[job].description1);
		var formattedDescription2 = HTMLworkDescription2.replace("%data%", work.jobs[job].description2);
		var formattedDescription3 = HTMLworkDescription3.replace("%data%", work.jobs[job].description3);
		$(".work-entry:last").append(formattedEmployerTilte, formattedDates, formattedDescription,formattedDescription2,formattedDescription3 );
		
	}
};

projects.display = function() {

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

	    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	    $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
	}
};

Achievements.display = function() {

	for (Achievement in Achievements.Achievements) {
		$("#Achievements").append(HTMLAchievementStart);

	    var formattedTitle = HTMLAchievementTitle.replace("%data%", Achievements.Achievements[Achievement].title);
		var formattedDates = HTMLAchievementDates.replace("%data%", Achievements.Achievements[Achievement].dates);
	    var formattedDescription = HTMLAchievementDescription.replace("%data%", Achievements.Achievements[Achievement].description);
	    $(".Achievement-entry:last").append(formattedTitle, formattedDates, formattedDescription);
	}
};



bio.display();
education.display();
work.display();
projects.display();
Achievements.display();
