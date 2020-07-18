//Task 1

console.group('Task 1');

const  spaces = function() {
    const userData = prompt('Enter string =>','Default string with four spaces');
    let counter = 0;
    for( let i = 0; i < userData.length ; i++ ){
        if(userData[i] === ' '){
            counter++
        };
    };
    alert(`String => "${userData}"\n has ${counter} spaces`);
    console.log(`String => "${userData}"\n has ${counter} spaces`);
    
};

spaces();

console.groupEnd()

//Task 2

console.group('Task 2');

const mailChecker = function(){
    const userMail = prompt('Enter your email','example@example.com');

    if(userMail.includes('@')){
        if(userMail.charAt(0) === '@'){            
            alert('Error => e-mail can`t start from "@"');
            console.log('Error => e-mail can`t start from "@"');            
            return null
        } else if ( userMail.charAt(userMail.length - 1) === '@') {            
            alert('Error => e-mail cannot end with "@"')
            console.log('Error => e-mail cannot end with "@"');            
            return null
        }
        alert(`Your e-mail is ${userMail}`);
        console.log(`Your e-mail is ${userMail}`);
        
    } else {
        alert(`Error ${userMail} is incorect`);
        console.log(`Error ${userMail} is incorect`);
        
    }
}

mailChecker()

console.groupEnd()

//Task 3

console.group('Task 3');

const htmlTracker = function(){
    const tagList = prompt('Enter html tags', 'Text html javascript html css');

    let temp = tagList.toLowerCase();

    let counterStart = {
        matches: 0,
        startIndex: 0
    }; 

    if(!tagList.includes('html')){
        alert('String dont have html tags')
    };

    while (true) {
        let start = temp.indexOf('html', counterStart.startIndex);
        if(start === -1) break;
        counterStart.matches++;
        counterStart.startIndex = start + 1;
    } ; 

    console.log(`This string have ${counterStart.matches} "html" tags`);
    
}

htmlTracker()

console.groupEnd();

//Task 4

console.group('Task 4');

const urlChecker = function(){

    const userUrl = prompt('Enter URL','http://www.w3schools.com');
    

    if(!userUrl === ('http://' || 'https://')){
        alert(`Your URL ${userUrl}, please check it again`)
    }

    let index = userUrl.lastIndexOf('/')
    let temp = userUrl.slice(index+1)
   
    console.log(temp);
}

urlChecker()
console.groupEnd();