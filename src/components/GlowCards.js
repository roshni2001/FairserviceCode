import React from 'react'
import './styles/glowCards.css'
const GlowCards = () => {
  return (
    <>
     <h1 class="main__heading">Pricing</h1>
  <div class="main__glowCards glowCards">
    <div class="glowCards__inner">
      <div class="glowCards__card glowCard">
        <h2 class="card__heading">Basic</h2>
        <p class="card__price">$9.99</p>
        <ul role="list" class="card__bullets flow">
          <li>Access to standard workouts and nutrition plans</li>
          <li>Email support</li>
        </ul>
        <a href="#basic" class="card__cta cta">Get Started</a>
      </div>

      <div class="glowCards__card card">
        <h2 class="card__heading">Pro</h2>
        <p class="card__price">$19.99</p>
        <ul role="list" class="card__bullets flow">
          <li>Access to advanced workouts and nutrition plans</li>
          <li>Priority Email support</li>
          <li>Exclusive access to live Q&A sessions</li>
        </ul>
        <a href="#pro" class="card__cta cta">Upgrade to Pro</a>
      </div>

      <div class="glowCards__card glowCard">
        <h2 class="card__heading">Ultimate</h2>
        <p class="card__price">$29.99</p>
        <ul role="list" class="card__bullets flow">
          <li>Access to all premium workouts and nutrition plans</li>
          <li>24/7 Priority support</li>
          <li>1-on-1 virtual coaching session every month</li>
          <li>Exclusive content and early access to new features</li>
        </ul>
        <a href="#ultimate" class="card__cta cta">Go Ultimate</a>
      </div>
    </div>

    <div class="overlay glowCards__inner"></div>
  </div>
    </>
  )
}

export default GlowCards