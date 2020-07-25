function colors() {
    const cells = document.querySelectorAll('.cell');
    const listItems = document.querySelectorAll('li');
    const container = document.querySelector('.panel');
    const firstTaskContainer = document.querySelector('.first_task');
    const colors = ['#1a2ba8', '#6a2525', '#256a4e', '#64b465', '#7f7d9b', '#df473a', '#271cfd', '#6f015d', '#8d7430'];
    const urls = [
        'https://i.pinimg.com/564x/c5/02/ab/c502ab8af44ff629af9e69de04d5c476.jpg',
        'https://i.pinimg.com/564x/cf/ae/e1/cfaee177a9ccc11b3510702b57cc567e.jpg',
        'https://i.pinimg.com/564x/2e/47/f8/2e47f87268040ce527f5a95dff3ff03d.jpg',
        'https://i.pinimg.com/564x/6d/85/40/6d854077746e7b25875572e34823a640.jpg',
        'https://i.pinimg.com/564x/54/0e/1b/540e1b9b20e16d1fca8ebfe0eb4a6b95.jpg',
        'https://i.pinimg.com/564x/c1/fa/d6/c1fad681084fb0f9466d77872fb99b9d.jpg',
        'https://i.pinimg.com/564x/95/d1/08/95d108e35776b9a60ce55ac7d480c9d7.jpg',
        'https://i.pinimg.com/564x/11/1a/03/111a03133d14214539c96e0f657dff1a.jpg',
        'https://i.pinimg.com/564x/b7/c5/4a/b7c54ade469a1a058c828cac2b5c650e.jpg'
    ]
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', function () {
            container.classList.remove('hidden');
            if (i === 0) {
                for (let j = 0; j < cells.length; j++) {
                    if (cells[j].style.backgroundImage) {
                        cells[j].style.backgroundImage = ``;
                    }
                    cells[j].style.backgroundColor = colors[j];
                };
                for (let y = 0; y < cells.length; y++) {
                    cells[y].addEventListener('click', function () {
                        if (firstTaskContainer.style.backgroundImage) {
                            firstTaskContainer.style.backgroundImage = ``;
                        }
                        firstTaskContainer.style.backgroundColor = colors[y];
                    });
                };
            } else if (i === 1) {
                for (let j = 0; j < cells.length; j++) {
                    cells[j].style.backgroundImage = `url(${urls[j]})`;
                };
                for (let y = 0; y < cells.length; y++) {
                    cells[y].addEventListener('click', function () {
                        firstTaskContainer.style.backgroundImage = `url(${urls[y]})`;
                    });
                };
            };
        });
    };

}
colors();

function keyBoard() {
    const firstRow = document.querySelectorAll('.keyboard_row:nth-child(1) .keyboard_row_buttons');
    const secondRow = document.querySelectorAll('.keyboard_row:nth-child(2) .keyboard_row_buttons');
    const thirdRow = document.querySelectorAll('.keyboard_row:nth-child(3) .keyboard_row_buttons');
    const fourthRow = document.querySelectorAll('.keyboard_row:nth-child(4) .keyboard_row_buttons');
    const space = document.querySelector('.keyboard_row_space');
    const display = document.querySelector('.display p');
    const displayString = [];
    let currentDisplay;
    function refresh(data) {
        if (data === 'Backspace') {
            displayString.splice(displayString.length - 1, 1);
        }
        else if (data === 'Tab') {
            displayString.push('&nbsp&nbsp&nbsp')
        }
        else {
            displayString.push(data);
        };
        
        display.innerHTML = displayString.join('');
    };
    window.addEventListener('keydown', function (event) {
        console.log(display.innerHTML);

        for (let i = 0; i < firstRow.length; i++) {
            if (event.keyCode === i + 49) {
                firstRow[i + 1].style.backgroundColor = 'rgb(5, 58, 58)';
                refresh(i + 1);
            }
        };
        if (event.keyCode === 48) {
            firstRow[10].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(0)
        } else if (event.keyCode === 192) {
            firstRow[0].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key)
        } else if (event.keyCode === 8) {
            firstRow[13].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key)
        } else if (event.keyCode === 189) {
            firstRow[11].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key)
        } else if (event.keyCode === 187) {
            firstRow[12].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key)
        };
        if (event.keyCode === 9) {
            secondRow[0].style.backgroundColor = 'rgb(5, 58, 58)';
            event.returnValue = false;
            refresh(event.key);
        } else if (event.keyCode === 81) {
            secondRow[1].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 87) {
            secondRow[2].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 69) {
            secondRow[3].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 82) {
            secondRow[4].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 84) {
            secondRow[5].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 89) {
            secondRow[6].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 85) {
            secondRow[7].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 73) {
            secondRow[8].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 79) {
            secondRow[9].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 80) {
            secondRow[10].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 219) {
            secondRow[11].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 221) {
            secondRow[12].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 220) {
            secondRow[13].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        };
        if (event.keyCode === 20) {
            if (thirdRow[0].style.backgroundColor === 'red') {
                thirdRow[0].style.backgroundColor = 'teal';
            } else {
                thirdRow[0].style.backgroundColor = 'red';
            };
        } else if (event.keyCode === 65) {
            thirdRow[1].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 83) {
            thirdRow[2].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 68) {
            thirdRow[3].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 70) {
            thirdRow[4].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 71) {
            thirdRow[5].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 72) {
            thirdRow[6].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 74) {
            thirdRow[7].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 75) {
            thirdRow[8].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 76) {
            thirdRow[9].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 186) {
            thirdRow[10].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 222) {
            thirdRow[11].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh(event.key);
        } else if (event.keyCode === 13) {
            thirdRow[12].style.backgroundColor = 'rgb(5, 58, 58)';
            refresh('<br>');
        };
        if (event.code === 'ShiftLeft') {
            fourthRow[0].style.backgroundColor = 'red';
        } else if (event.keyCode === 90) {
            fourthRow[1].style.backgroundColor = 'rgb(5, 58, 58)'
            refresh(event.key);
        } else if (event.keyCode === 88) {
            fourthRow[2].style.backgroundColor = 'rgb(5, 58, 58)'
            refresh(event.key);
        } else if (event.keyCode === 67) {
            fourthRow[3].style.backgroundColor = 'rgb(5, 58, 58)'
            refresh(event.key);
        } else if (event.keyCode === 86) {
            fourthRow[4].style.backgroundColor = 'rgb(5, 58, 58)'
            refresh(event.key);
        } else if (event.keyCode === 66) {
            fourthRow[5].style.backgroundColor = 'rgb(5, 58, 58)'
            refresh(event.key);
        } else if (event.keyCode === 78) {
            fourthRow[6].style.backgroundColor = 'rgb(5, 58, 58)'
            refresh(event.key);
        } else if (event.keyCode === 77) {
            fourthRow[7].style.backgroundColor = 'rgb(5, 58, 58)'
            refresh(event.key);
        } else if (event.keyCode === 188) {
            fourthRow[8].style.backgroundColor = 'rgb(5, 58, 58)'
            refresh(event.key);
        } else if (event.keyCode === 190) {
            fourthRow[9].style.backgroundColor = 'rgb(5, 58, 58)'
            refresh(event.key);
        } else if (event.keyCode === 191) {
            fourthRow[10].style.backgroundColor = 'rgb(5, 58, 58)'
            refresh(event.key);
        } else if (event.code === 'ShiftRight') {
            fourthRow[11].style.backgroundColor = 'red';
        };
        if (event.keyCode === 32) {
            space.style.backgroundColor = 'rgb(5, 58, 58)';
            refresh('&nbsp');
        };
    });
    window.addEventListener('keyup', function () {
        for (let i = 0; i < firstRow.length; i++) {
            if (event.keyCode === i + 49) {
                firstRow[i + 1].style.backgroundColor = 'teal';
            } else if (event.keyCode === 48) {
                firstRow[10].style.backgroundColor = 'teal';
            } else if (event.keyCode === 192) {
                firstRow[0].style.backgroundColor = 'teal';
            } else if (event.keyCode === 8) {
                firstRow[13].style.backgroundColor = 'teal';
            } else if (event.keyCode === 189) {
                firstRow[11].style.backgroundColor = 'teal';
            } else if (event.keyCode === 187) {
                firstRow[12].style.backgroundColor = 'teal';
            };
        };
        if (event.keyCode === 9) {
            secondRow[0].style.backgroundColor = 'teal';
        } else if (event.keyCode === 81) {
            secondRow[1].style.backgroundColor = 'teal';
        } else if (event.keyCode === 87) {
            secondRow[2].style.backgroundColor = 'teal';
        } else if (event.keyCode === 69) {
            secondRow[3].style.backgroundColor = 'teal';
        } else if (event.keyCode === 82) {
            secondRow[4].style.backgroundColor = 'teal';
        } else if (event.keyCode === 84) {
            secondRow[5].style.backgroundColor = 'teal';
        } else if (event.keyCode === 89) {
            secondRow[6].style.backgroundColor = 'teal';
        } else if (event.keyCode === 85) {
            secondRow[7].style.backgroundColor = 'teal';
        } else if (event.keyCode === 73) {
            secondRow[8].style.backgroundColor = 'teal';
        } else if (event.keyCode === 79) {
            secondRow[9].style.backgroundColor = 'teal';
        } else if (event.keyCode === 80) {
            secondRow[10].style.backgroundColor = 'teal';
        } else if (event.keyCode === 219) {
            secondRow[11].style.backgroundColor = 'teal';
        } else if (event.keyCode === 221) {
            secondRow[12].style.backgroundColor = 'teal';
        } else if (event.keyCode === 220) {
            secondRow[13].style.backgroundColor = 'teal';
        };
        if (event.keyCode === 65) {
            thirdRow[1].style.backgroundColor = 'teal';
        } else if (event.keyCode === 83) {
            thirdRow[2].style.backgroundColor = 'teal';
        } else if (event.keyCode === 68) {
            thirdRow[3].style.backgroundColor = 'teal';
        } else if (event.keyCode === 70) {
            thirdRow[4].style.backgroundColor = 'teal';
        } else if (event.keyCode === 71) {
            thirdRow[5].style.backgroundColor = 'teal';
        } else if (event.keyCode === 72) {
            thirdRow[6].style.backgroundColor = 'teal';
        } else if (event.keyCode === 74) {
            thirdRow[7].style.backgroundColor = 'teal';
        } else if (event.keyCode === 75) {
            thirdRow[8].style.backgroundColor = 'teal';
        } else if (event.keyCode === 76) {
            thirdRow[9].style.backgroundColor = 'teal';
        } else if (event.keyCode === 186) {
            thirdRow[10].style.backgroundColor = 'teal';
        } else if (event.keyCode === 222) {
            thirdRow[11].style.backgroundColor = 'teal';
        } else if (event.keyCode === 13) {
            thirdRow[12].style.backgroundColor = 'teal';
        };
        if (event.code === 'ShiftLeft') {
            fourthRow[0].style.backgroundColor = 'teal';
        } else if (event.keyCode === 90) {
            fourthRow[1].style.backgroundColor = 'teal'
        } else if (event.keyCode === 88) {
            fourthRow[2].style.backgroundColor = 'teal'
        } else if (event.keyCode === 67) {
            fourthRow[3].style.backgroundColor = 'teal'
        } else if (event.keyCode === 86) {
            fourthRow[4].style.backgroundColor = 'teal'
        } else if (event.keyCode === 66) {
            fourthRow[5].style.backgroundColor = 'teal'
        } else if (event.keyCode === 78) {
            fourthRow[6].style.backgroundColor = 'teal'
        } else if (event.keyCode === 77) {
            fourthRow[7].style.backgroundColor = 'teal'
        } else if (event.keyCode === 188) {
            fourthRow[8].style.backgroundColor = 'teal'
        } else if (event.keyCode === 190) {
            fourthRow[9].style.backgroundColor = 'teal'
        } else if (event.keyCode === 191) {
            fourthRow[10].style.backgroundColor = 'teal'
        } else if (event.code === 'ShiftRight') {
            fourthRow[11].style.backgroundColor = 'teal';
        };
        if (event.keyCode === 32) {
            space.style.backgroundColor = 'teal'
        };
    });
};
keyBoard();
