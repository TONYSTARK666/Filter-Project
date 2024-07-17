function myFilter() {

            // Получения значений
            // Осуществляется проверка на начальное значение и проверка на нажатие чекбокса
            let blurCheck = document.getElementById('blur_check').checked;
            let blur = document.getElementById('blur').value == 0 ? '' : (blurCheck ? `blur(${document.getElementById('blur').value}px) ` : '');

            let brightnessCheck = document.getElementById('brightness_check').checked;
            let brightness = document.getElementById('brightness').value == 100 ? '' : (brightnessCheck ? `brightness(${document.getElementById('brightness').value}%) ` : '');

            let contrastCheck = document.getElementById('contrast_check').checked;
            let contrast = document.getElementById('contrast').value == 100 ? '' : (contrastCheck ? `contrast(${document.getElementById('contrast').value}%) ` : '');

            let dropShadowCheck = document.getElementById('shadow_check').checked;
            let dropShadow;
            // Формирование тени
            if(dropShadowCheck) {
                let offsetX = `${document.getElementById('offsetX').value}px`;
                let offsetY = `${document.getElementById('offsetY').value}px`;
                let blurRadiusCheck = document.getElementById('blur_radius_check').checked;
                let blurRadius = blurRadiusCheck ? `${document.getElementById('blur_radius').value}px` : '';
                let color = document.getElementById('color').value;
                let red = parseInt(color.slice(1, 3), 16);
                let green = parseInt(color.slice(3, 5), 16);
                let blue = parseInt(color.slice(5, 7), 16);
                dropShadow = (document.getElementById('offsetX').value == 0 && document.getElementById('offsetY').value == 0) ? '' : `drop-shadow(${offsetX} ${offsetY} ${blurRadius} rgb(${red}, ${green}, ${blue})) `;
            } else {
                dropShadow = '';
            }

            let hueRotateCheck = document.getElementById('hue_rotate_check').checked;
            let hueRotate = document.getElementById('hue_rotate').value == 0 ? '' : (hueRotateCheck ? `hue-rotate(${document.getElementById('hue_rotate').value}deg) ` : ''); 

            let grayscaleCheck = document.getElementById('grayscale_check').checked;
            let grayscale = document.getElementById('grayscale').value == 0 ? '' : (grayscaleCheck ? `grayscale(${document.getElementById('grayscale').value}%) ` : '');

            let invertCheck = document.getElementById('invert_check').checked;
            let invert = document.getElementById('invert').value == 0 ? '' : (invertCheck ? `invert(${document.getElementById('invert').value}%) ` : '');

            let opacityCheck = document.getElementById('opacity_check').checked;
            let opacity = document.getElementById('opacity').value == 100 ? '' : (opacityCheck ? `opacity(${document.getElementById('opacity').value}%) ` : '');

            let saturateCheck = document.getElementById('saturate_check').checked;
            let saturate = document.getElementById('saturate').value == 100 ? '' : (saturateCheck ? `saturate(${document.getElementById('saturate').value}%) ` : '');

            let sepiaCheck = document.getElementById('sepia_check').checked;
            let sepia = document.getElementById('sepia').value == 0 ? '' : (sepiaCheck ? `sepia(${document.getElementById('sepia').value}%)` : '');

            // Итоговая строка
            let str = `${blur}${brightness}${contrast}${dropShadow}${hueRotate}${grayscale}${invert}${opacity}${saturate}${sepia}`;
            let result = str ? 'filter: ' + str : 'filter: none';

            // Сохранение результата в textarea
            let textarea = document.getElementById('cssCode');
            textarea.value = result;

            // Применение фильтра на изображение
            let img = document.querySelector('img');
            img.style.filter = str;
        }

        // Обработчики события
        for(let item of document.querySelectorAll('input')) {
            item.addEventListener('input', myFilter);
        }

        // Обработчик события для кнопки
        let buttonClear = document.getElementById('clear');
        buttonClear.addEventListener('click', (e) => {
            document.querySelector('img').style.filter = '';

            // Сброс начальных значений
            document.getElementById('blur').value = 0;
            document.getElementById('brightness').value = 100;
            document.getElementById('contrast').value = 100;
            document.getElementById('offsetX').value = 0;
            document.getElementById('offsetY').value = 0;
            document.getElementById('blur_radius').value = 0;
            document.getElementById('color').value = '#000000';
            document.getElementById('hue_rotate').value = 0;
            document.getElementById('grayscale').value = 0;
            document.getElementById('invert').value = 0;
            document.getElementById('opacity').value = 100;
            document.getElementById('saturate').value = 100;
            document.getElementById('sepia').value = 0;
            document.getElementById('cssCode').value = 'filter: none';

        })

        // Применение функции
        myFilter();