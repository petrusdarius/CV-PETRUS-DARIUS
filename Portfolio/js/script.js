//menyiapkan jquery setelah document sudah siap
$(document).ready(function(){
    // event ketika tombol diklik
    $('.page-scroll').on('click', function(e){
        
        // mengambil nilai dari href
        let tujuan = $(this).attr('href');
        
        let elementujuan = $(tujuan);
        // menganimasikan smooth scrolling
        $('html,body').animate({
            scrollTop: elementujuan.offset().top -80
        },950);
        e.preventDefault();
    });
})
