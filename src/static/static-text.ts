import {IPagesDataState} from "../types/redux-types";

export const ROOT_TEST_TEXT_1 = "Welcome to my personal website dedicated to programming!\n" +
    "Here, you will find a collection of resources, articles, and insights related to the fascinating world of programming. Whether you are a beginner looking to take your first steps into coding or an experienced developer seeking to expand your knowledge, this site aims to be a valuable source of information and inspiration.\n" +
    "As a passionate programmer myself, I believe that programming is not just a technical skill, but also a creative outlet that empowers us to bring ideas to life. Through this website, I aim to share my experiences, expertise, and discoveries in various programming languages, frameworks, and technologies.\n" +
    "You can expect to find a wide range of content, including tutorials, code snippets, project showcases, and discussions on emerging trends and best practices in the programming community. I will also delve into topics such as software development methodologies, problem-solving techniques, and tips for enhancing productivity and efficiency.\n" +
    "I invite you to explore the different sections of this site, engage in discussions, and contribute your own thoughts and experiences. Together, let's embark on this journey of continuous learning and growth in the exciting world of programming.\n" +
    "Thank you for visiting, and I hope you find this website informative, inspiring, and enjoyable!\n"
export const ROOT_TEST_LIST = ["TESTLIST", "TESTLIST", "TESTLIST", "TESTLIST", "TESTLIST", "TESTLIST"]

export const RU_DATA: IPagesDataState = {
    testData: "Будучи страстным программистом, я считаю, что программирование — это не только технический навык, но и творческая отдушина, которая дает нам возможность воплощать идеи в жизнь. Через этот веб-сайт я стремлюсь поделиться своим опытом, знаниями и открытиями в различных языках программирования, фреймворках и технологиях.",
    textSwitchLanguage: "Сменить язык",
    textSwitchTheme: "Сменить тему",
    links: {
        about: "Главная",
        stack: "Стек",
        price: "Цены"
    }
}
export const EN_DATA: IPagesDataState = {
    testData: "As a passionate programmer myself, I believe that programming is not just a technical skill, but also a creative outlet that empowers us to bring ideas to life. Through this website, I aim to share my experiences, expertise, and discoveries in various programming languages, frameworks, and technologies",
    textSwitchLanguage: "Change language",
    textSwitchTheme: "Change theme",
    links: {
        about: "About",
        stack: "Stack",
        price: "Price"
    }
}