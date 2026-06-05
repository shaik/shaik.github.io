// ZX Spectrum 48K — script.js
// Adds a subtle LOAD "" stripe animation on card hover
// and a typing effect to the boot screen prompt.

(function () {
    'use strict';

    // ── Typing effect on the prompt K cursor ────────────────
    const bootLines = [
        '10 REM SHAI KFIR',
        '20 REM Personal portfolio & projects',
        '30 PRINT "github.com/shaik"',
        '40 PRINT "shai.kfir@gmail.com"',
        '50 RUN',
    ];

    // ── Card LOAD "" stripe flash on hover ──────────────────
    function setupCardFlash() {
        document.querySelectorAll('.project-card').forEach(card => {
            const bar = card.querySelector('.card-color-bar');
            if (!bar) return;

            let ticker = null;
            const colors = [
                '#0000FF','#FF0000','#FF00FF',
                '#00FF00','#00FFFF','#FFFF00','#FFFFFF'
            ];
            let ci = 0;
            const origBg = getComputedStyle(bar).backgroundColor;

            card.addEventListener('mouseenter', () => {
                ticker = setInterval(() => {
                    bar.style.background = colors[ci % colors.length];
                    ci++;
                }, 80);
            });

            card.addEventListener('mouseleave', () => {
                clearInterval(ticker);
                bar.style.background = '';
                ci = 0;
            });
        });
    }

    // ── LOAD "" button flicker ───────────────────────────────
    function setupLoadBtns() {
        document.querySelectorAll('.load-btn').forEach(btn => {
            const original = btn.textContent;
            btn.addEventListener('mouseenter', () => {
                let i = 0;
                const frames = ['LOAD ""', 'Loading .', 'Loading ..', 'Loading ...', 'RUN'];
                const anim = setInterval(() => {
                    btn.textContent = frames[i % frames.length];
                    i++;
                    if (i >= frames.length * 2) {
                        clearInterval(anim);
                        btn.textContent = original;
                    }
                }, 110);
            });
        });
    }

    // ── Blinking cursor already handled by CSS ───────────────
    // (animation: blink-cursor in style.css)

    document.addEventListener('DOMContentLoaded', () => {
        setupCardFlash();
        setupLoadBtns();
    });
}());
