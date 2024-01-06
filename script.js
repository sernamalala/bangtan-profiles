//Array filled with the bangtan members information

const bangtanMembers = 

[
    {
        name: "Kim Namjoon",
        role: "Producer, Rapper, Composer, Writer, Singer, Dancer",
        img:"./images/Namjoon.jpg",
        text:"As the leader of BTS, RM is known for his exceptional rapping skills, thoughtful lyrics, and charismatic stage presence. Beyond his musical talents, he is also a highly intelligent individual, fluent in English, and often takes on the role of spokesperson for the group. RM's leadership qualities and deep insights contribute to BTS's success on a global scale."
    },
    {
        name: "Kim Seokjin",
        role: "Lead Singer, Visual, Writer, Producer, Dancer",
        img:"./images/Seokjin.jpg",
        text:`Jin, also known as the "Worldwide Handsome," is the oldest member of BTS. His powerful vocals and visual appeal make him a vital part of the group's dynamic. Jin's humor and positive energy add a lighthearted touch to BTS's interactions, making him a beloved figure among fans.`
    }
    ,
    {
        name: "Min Yoongi",
        role: "Main Rapper, Producer, Writer, Singer, Dancer",
        img:"./images/Yoongi.jpg",
        text:" Suga, the group's rapper and producer, is recognized for his exceptional lyricism and production skills. Despite his stoic appearance, Suga is a passionate and dedicated artist. His journey from an underground rapper to a global idol reflects his resilience and commitment to his craft."
    },
    {
        name: "Jung Hoseok",
        role: "Main dancer, Rapper, Writer, Producer, Singer, Choreographer",
        img:"./images/Hoseok.jpg",
        text:"J-Hope, with his infectious energy and remarkable dancing abilities, brings a vibrant and upbeat element to BTS's performances. As the main dancer and rapper, he contributes to the group's diverse talents. J-Hope's positive attitude and charismatic stage presence make him a favorite among fans."
    },
    {
        name: "Park Jimin",
        role: "Lead Dancer, Lead Singer, Writer",
        img:"./images/Jimin.jpg",
        text:"Jimin is known for his captivating dance moves, soulful vocals, and alluring stage presence. As the lead dancer and vocalist, he adds a graceful and dynamic dimension to BTS's performances. Jimin's charm and dedication have earned him a dedicated fan following."
    },
    {
        name: "Kim Taehyung",
        role: "Singer, Main visual, Writer, Dancer",
        img:"./images/Taehyung.jpg",
        text:"V, with his deep and unique voice, is the vocalist responsible for adding a soulful and emotive touch to BTS's music. Beyond his musical talents, V is known for his enigmatic and charming personality, making him a standout member of the group."
    },
    {
        name: "Jeon Jungkook",
        role: "Main Singer, Center, Dancer, Writer",
        img:"./images/Jungkook.jpg",
        text:`As the youngest member, Jungkook is often referred to as the "Golden Maknae" due to his exceptional skills in singing, dancing, and even producing. His versatility and dedication have played a significant role in BTS's success. Jungkook's growth from a talented teenager to a global icon reflects his ongoing commitment to self-improvement and artistic expression.`
    }
]

//select elements

const image = document.getElementById("member-img");
const member = document.getElementById("member");
const role = document.getElementById("role");
const information = document.getElementById("info");

//select button

const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const randomButton = document.querySelector(".random-member");

//set the starting item

let currentMember = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function(){

displayInformation(currentMember);
})

//function to show information

function displayInformation(memberNumber){
    const memberItem = bangtanMembers[memberNumber];
    image.src = memberItem.img;
    member.textContent = memberItem.name;
    role.textContent = memberItem.role;
    information.textContent = memberItem.text;
}
//when buttons are clicked next

nextButton.addEventListener("click", function(){
        
        currentMember++;

    if(currentMember > bangtanMembers.length - 1){
    
        currentMember = 0;
    }
   
    displayInformation(currentMember);
    
});

//when buttons are clicked previous

previousButton.addEventListener("click", function(){

    currentMember--;

    if(currentMember < 0){
    
        currentMember = bangtanMembers.length-1;
    }
    
    displayInformation(currentMember);

});

//random Button

randomButton.addEventListener("click", function(){

    const randomNum = Math.floor(Math.random()*bangtanMembers.length);
    displayInformation(randomNum);

});