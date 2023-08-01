<section>
    <div class={`w-full h-screen text-${theme_info.direction} flex items-center justify-center bg-notion-background-${theme_info.theme} text-notion-${theme_info.color}-${theme_info.theme} font-${theme_info.font}`}>
        <div>
            <h2 class="text-xl sm:text-6xl lg:text-9xl">
                {date_info.hours}:{(date_info.minutes < 10) ? '0' + date_info.minutes : date_info.minutes}:{(date_info.seconds < 10) ? '0' + date_info.seconds : date_info.seconds}
            </h2>
            <h3 class="text-sm sm:text-2xl lg:text-3xl">
                {date_info.day} the {date_info.date}{getDateSuffix(date_info.date)} of {date_info.month} {date_info.year}
            </h3>
        </div>
    </div>
</section>

<script>
import { page } from '$app/stores';
import getThemeInfo from "../../../functions/getThemeInfo";

const theme_info = {
    theme: 'light',
    font: 'sans',
    color: 'purple',
    direction: 'right'
}

function setTheme(){
    let theme = getThemeInfo($page.url.href)
    theme_info.theme = theme.theme
    theme_info.font = theme.font
    theme_info.color = theme.color
    theme_info.direction = theme.direction
}
setTheme()

const date_info = {
    year: 0,
    month: 0,
    date: 0,
    day: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
}

const monthMap = new Map([
    [1, 'Januari'],
    [2, 'February'],
    [3, 'March'],
    [4, 'April'],
    [5, 'May'],
    [6, 'June'],
    [7, 'July'],
    [8, 'August'],
    [9, 'September'],
    [10, 'October'],
    [11, 'November'],
    [12, 'December'],
])

const dayMap = new Map([
    [1, 'Monday'],
    [2, 'Tuesday'],
    [3, 'Wednesday'],
    [4, 'Thursday'],
    [5, 'Friday'],
    [6, 'Saturday'],
    [7, 'Sunday'],
])

function getDateSuffix(date) {
    switch(date) {
        case 1: 
        case 21:
        case 31:
            return 'st'
        break
        case 2: 
        case 22:
            return 'nd'
        break
        case 3: 
        case 23:
            return 'rd'
        break
        default:
            return 'th'
        break
    }
}



function setTime() {
    const date = new Date();

    date_info.year = date.getFullYear()
    date_info.month = monthMap.get(date.getMonth())
    date_info.date = date.getDate()
    date_info.day = dayMap.get(date.getDay())
    date_info.hours = date.getHours()
    date_info.minutes = date.getMinutes()
    date_info.seconds = date.getSeconds()
}

setTime()

let time_interval = setInterval(() => {
    setTime()
}, 1000)
</script>