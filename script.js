/**
 * CodeNawak - Script principal
 * Script dans le style années 2000 pour le site CodeNawak
 */

// Code JavaScript pour créer un effet d'étoiles qui tombent et popups
window.onload = function() {
    // Bienvenue popup typique des sites des années 2000
    alert("✨ Bienvenue sur CodeNawak! Le meilleur site de programmation! ✨");
    
    // Popup de favoris
    setTimeout(function() {
        if(confirm("Voulez-vous ajouter CodeNawak à vos favoris? C'EST GRATUIT!!!")) {
            alert("Merci d'avoir ajouté CodeNawak à vos favoris! Vous êtes GÉNIAL!!!");
        }
    }, 3000);
    
    // Ajout de données structurées supplémentaires pour le SEO
    addFAQStructuredData();
    
    // Implémentation du suivi de défilement pour le SEO
    trackScrollDepth();
    
    // Mise en évidence automatique du mot-clé CodeNawak
    highlightKeywords();
};

/**
 * Ajoute des données structurées FAQ pour le SEO
 */
function addFAQStructuredData() {
    var jsonLd = document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "Qu'est-ce que CodeNawak?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "CodeNawak est le site de référence pour apprendre la programmation web avec un style rétro des années 2000. Tutoriels HTML, CSS, JavaScript et PHP gratuits."
            }
        }, {
            "@type": "Question",
            "name": "Les ressources CodeNawak sont-elles gratuites?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, tous les tutoriels, scripts et ressources CodeNawak sont 100% gratuits et téléchargeables librement."
            }
        }]
    });
    document.head.appendChild(jsonLd);
}

/**
 * Suivi de profondeur de défilement pour le SEO
 */
function trackScrollDepth() {
    var scrolled = false;
    var timer = null;
    
    window.addEventListener('scroll', function() {
        if (timer !== null) {
            clearTimeout(timer);
        }
        
        timer = setTimeout(function() {
            // Calcul du pourcentage de défilement
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var docHeight = Math.max(
                document.body.scrollHeight, 
                document.body.offsetHeight, 
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight, 
                document.documentElement.offsetHeight
            );
            var winHeight = window.innerHeight || document.documentElement.clientHeight;
            var scrollPercent = scrollTop / (docHeight - winHeight) * 100;
            
            // On enregistrerait normalement cet événement avec un outil d'analyse
            console.log('Scroll depth: ' + Math.round(scrollPercent) + '%');
            
            // Marque l'engagement pour le SEO (technique années 2000)
            if (!scrolled && scrollPercent > 25) {
                scrolled = true;
                var engagementMark = document.createElement('div');
                engagementMark.style.display = 'none';
                engagementMark.innerHTML = '<!-- Engagement utilisateur CodeNawak détecté -->';
                document.body.appendChild(engagementMark);
            }
        }, 100);
    });
}

/**
 * Met en évidence automatiquement les occurrences de "CodeNawak" dans la page
 */
function highlightKeywords() {
    const highlightKeyword = (text) => {
        const regex = new RegExp('(CodeNawak)', 'gi');
        return text.replace(regex, '<strong class="keyword-highlight" style="color: #FF00FF;">$1</strong>');
    };

    const textNodes = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                // Ignore les scripts et styles
                if (node.parentElement.tagName === 'SCRIPT' || 
                    node.parentElement.tagName === 'STYLE') {
                    return NodeFilter.FILTER_REJECT;
                }
                // Accepte uniquement les nœuds contenant "codenawak"
                if (node.nodeValue.match(/codenawak/i)) {
                    return NodeFilter.FILTER_ACCEPT;
                }
                return NodeFilter.FILTER_SKIP;
            }
        },
        false
    );

    let node;
    while (node = textNodes.nextNode()) {
        const span = document.createElement('span');
        span.innerHTML = highlightKeyword(node.nodeValue);
        node.parentElement.replaceChild(span, node);
    }
}

/**
 * Génère des étoiles filantes en arrière-plan (effet visuel années 2000)
 * Note: Cette fonction est commentée car elle causerait des problèmes de performance
 * sur les navigateurs modernes, mais typique des sites années 2000
 */
/*
function createFallingStars() {
    const starsContainer = document.createElement('div');
    starsContainer.style.position = 'fixed';
    starsContainer.style.top = '0';
    starsContainer.style.left = '0';
    starsContainer.style.width = '100%';
    starsContainer.style.height = '100%';
    starsContainer.style.overflow = 'hidden';
    starsContainer.style.pointerEvents = 'none';
    starsContainer.style.zIndex = '-1';
    document.body.appendChild(starsContainer);
    
    setInterval(function() {
        const star = document.createElement('div');
        star.className = 'falling-star';
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.backgroundColor = '#FFFFFF';
        star.style.top = '0';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.animationDuration = Math.random() * 3 + 2 + 's';
        starsContainer.appendChild(star);
        
        setTimeout(function() {
            star.remove();
        }, 5000);
    }, 200);
}
*/

// Mise à jour du compteur de visiteurs (simulé pour l'effet rétro)
setInterval(function() {
    const counter = document.querySelector('.counter');
    if (counter) {
        const currentCount = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        counter.textContent = 'Visiteurs: ' + (currentCount + 1);
    }
}, 60000); // Incrémente toutes les minutes pour l'effet

// Code pour le hit counter typique des années 2000
// Dans un vrai site de cette époque, cela aurait communiqué avec un serveur
document.addEventListener('DOMContentLoaded', function() {
    // Code pour pinger les services d'indexation (typique des années 2000)
    setTimeout(function() {
        const pingImage = new Image();
        pingImage.src = 'https://www.codenawak.fr/ping.gif?' + new Date().getTime();
    }, 5000);
});