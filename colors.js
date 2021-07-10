
        var Links = {
            setColor: function(color) {
                //a태그 색 변경
                // var alist = document.querySelectorAll('a');
                //     var i = 0;
                //     while (i<alist.length){
                //         alist[i].style.color = color;
                //         i = i + 1;
                //     }
                //-------------
                //jquery 사용
                $('a').css('color', color);
                //두번째 인자는 function(color)에 매개변수로 들어간 color를 받는것
            }
        }
        var Body = {
            setColor: function(color){
            // document.querySelector('body').style.color = color;
            $('body').css('color', color);
            },
            setBackgroundColor: function(color){
            // document.querySelector('body').style.backgroundColor = color;
            $('body').css('backgroundColor',color);
            }
        }
        
        function nightDayHandler(self){
            var target=document.querySelector('body');
            if(self.value === 'Night Mode') {
                Body.setBackgroundColor('black');
                Body.setColor('white');
                self.value='Day Mode';
                Links.setColor('pink');
            }
            else {
                Body.setBackgroundColor('white');
                self.value='Night Mode';
                Links.setColor('blue');
                Body.setColor('black');
            }
        }
        
