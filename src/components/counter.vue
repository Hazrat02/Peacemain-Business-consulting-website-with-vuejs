<template>
    <div class="content" ref="counterSection">
      <div class="number">
        <h2 class="counter">{{ displayValue }}</h2>
        <span>+</span>
      </div>
      <p>{{ label }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      count: {
        type: Number,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        displayValue: 0,
        hasAnimated: false // To ensure animation runs only once
      };
    },
    mounted() {
      this.observeVisibility();
    },
    methods: {
      observeVisibility() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasAnimated) {
              this.animateCounter();
              this.hasAnimated = true; // Ensure the animation only runs once
              observer.unobserve(this.$refs.counterSection); // Stop observing after animation
            }
          });
        });
        observer.observe(this.$refs.counterSection);
      },
      animateCounter() {
        const duration = 1000;
        const startValue = 0;
        const endValue = this.count;
        const startTime = performance.now();
  
        const animate = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          this.displayValue = Math.floor(progress * (endValue - startValue) + startValue);
  
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
  
        requestAnimationFrame(animate);
      }
    }
  };
  </script>
  
  <style scoped>
  .number {
    font-size: 2em;
    font-weight: bold;
  }
  
  .counter {
    display: inline-block;
  }
  </style>
  