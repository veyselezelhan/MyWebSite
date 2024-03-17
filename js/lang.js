
$(document).ready(function(){


    var arrLang={

        'tr':{
            
            '1': 'Anasayfa',
            '2': 'Yetenekler',
            '3': 'EĞİTİM VE DENEYİM',
            '4': 'İLETİŞİM',
            '5': 'Merhaba',
            '6': 'Ben Veysel Ezelhan Evcil, 24 yaşındaım.Front-End Web Geliştiricisi ve  UI/UX Tasarımcıyım. HTML, CSS, Angular, Javascript, React konularında deneyimliyim.',
            '7': 'ŞİMDİ İLETİŞİME GEÇİN !',
            '8': 'Yetenekler',
            '9': 'Arayüz Geliştirme',
            '10': 'Kullanıcı dostu ve estetik arayüzler tasarlayarak, kullanıcı deneyimini en üst düzeye çıkarmaya odaklanıyorum.',
            '11': 'UI/UX Tasarım',
            '12': 'Estetik ve işlevselliği birleştirerek, kullanıcıların web veya mobil uygulamalarda etkileşimini en üst düzeye çıkarmak için özenle çalışıyorum.',
            '13': 'Profesyonel Düşünce Yapısı',
            '14': 'Problemleri analiz edip hızlı bir şekilde çözüme kavuşturabilme yeteneğine sahibim.',
            '15': '>EĞİTİM VE DENEYİM',
            '16': 'Akdeniz Ünversitesi',
            '17': 'Bilgisayar Programcılığı',
            '18': '5 Ekim 2022 - 16 Kasım 2023',
            '19': 'Front-End Web Yazılımcı & UI/UX Tasarımcı',
            '20': 'İLETİŞİM',
            '21': 'Telefon',
            '22': 'İsim:',
            '23': 'Mail:',
            '24': 'Konu:',
            '25': 'Mesaj:',
            '26': 'Mesaj gönder'
            
            
        },

        'en':{

            '1': 'Home',
            '2': 'Skills',
            '3': 'education and EXPERIENCE',
            '4': 'contact',
            '5': 'Hello',
            '6': 'I am Veysel Ezelhan Evcil, I am 24 years old. I am a Front-End Web Developer and UI/UX Designer. I am experienced in HTML, CSS, Angular, Javascript and React.',
            '7': 'CONTACT ME NOW !',
            '8': 'SKILLS',
            '9': 'Interface Development',
            '10': 'I focus on maximizing the user experience by designing user-friendly and aesthetic interfaces.',
            '11': 'UI/UX Design',
            '12': 'By combining aesthetics and functionality, I work diligently to maximize user engagement in web or mobile applications.',
            '13': 'Professional Mindset',
            '14': 'I have the ability to analyze problems and solve them quickly.',
            '15': 'EDUCATION AND EXPERIENCE',
            '16': 'Akdeniz University',
            '17': 'Computer Programming',
            '18': '5 October 2022 - 16 November 2023',
            '19': 'Front-End Developer & UI/UX Designer',
            '20': 'Contact',
            '21': 'Phone',
            '22': 'Name:',
            '23': 'Mail:',
            '24': 'Subject:',
            '25': 'Your Message:',
            '26': 'Send a message'
        },


    };

    $('.dropdown-item').click(function() {
        localStorage.setItem('dil', JSON.stringify($(this).attr('id'))); 
        location.reload();
      });
    
        var lang =JSON.parse(localStorage.getItem('dil'));
    
        if(lang=="tr"){
            $("#drop_yazı").html("Türkçe");
        }
        else{
            $("#drop_yazı").html("English");
    
        }
    
        $('a,h5,p,h1,h2,h4,span,li,button,h3,label').each(function(index,element) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        
      });
    
  
       
});