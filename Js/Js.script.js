 document.addEventListener('DOMContentLoaded', function() {
   
            
        const form = document.querySelector('.contact-form');
        const errormessage = document.getElementById('error-message');
        const successmessage = document.getElementById('success-message');
        const submitbtn = document.getElementById('submit-btn');

        form.addEventListener('submit', function (event){
            event.preventDefault(); 

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Reset Message
            errormessage.classList.remove('show');
            successmessage.classList.remove('show');

            if (!name || !email || !message || !emailPattern.test(email)) {
               errormessage.textContent = "Please fill in all required fields with a valid email address.";
               errormessage.classList.add('show');
               return;
            }

            // Loading state
            submitbtn.disabled = true;
            submitbtn.textContent = "Sending...";

            //simulate server delay 1.5sec
            setTimeout(() =>{
            successmessage.textContent = "Thank you! Your message has been sent successfully.";
            successmessage.classList.add('show');

            form.reset(); 

            submitbtn.disabled = false;
            submitbtn.textContent ="Send Message";

            //Auto-hide success message after 4sec
            setTimeout(() =>{
                successmessage.classList.remove('show');
            },4000)
            
            },1500)
        
        });

        /*==== Scroll Animation Logic ===*/
        const fader = document.querySelectorAll('.fade-in');

        const appearOptions = {
            threshold: 0.2};
         
        const appearOnscroll = new IntersectionObserver (function(entries, observer){
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            });
        },appearOptions);

        fader.forEach(fader =>{
            appearOnscroll.observe(fader);
        }); 

});
