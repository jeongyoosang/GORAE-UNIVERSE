// color.js  gptㄹ 물어본거 
var Links = {
    setColor: function(color) {
        document.querySelectorAll('a').forEach(el => el.style.color = color);
    }
};

var Body = {
    setColor: function(color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
};

var Title = {
    setColor: function(color) {
        document.querySelector('h1').style.color = color;
    }
};

function toggleNightDay(button) {
    if (button.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Title.setColor('white');
        document.querySelector('ol')?.style.color = 'white'; // ol 태그가 있는 경우만 적용
        Links.setColor('powderblue');
        button.value = 'day';
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Title.setColor('black');
        document.querySelector('ol')?.style.color = 'black';
        Links.setColor('blue');
        button.value = 'night';
    }
}
