import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Property } from '../../core/models/property.model';
import { PropertyCardComponent } from '../../shared/property-card/property-card.component';
import { SkeletonLoaderComponent } from '../../shared/skeleton-loader/skeleton-loader.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, PropertyCardComponent, SkeletonLoaderComponent, CarouselModule],
  template: `
    <section class="home-carousel-wrap" aria-label="Featured banners">
      <carousel>
        <slide>
          <a href="#" target="_blank" rel="noopener" class="carouselimg">
            <img src="assets/images/carousel/1.jpg" alt="Banner 1" />
          </a>
        </slide>
        <slide>
          <a href="#" target="_blank" rel="noopener" class="carouselimg">
            <img src="assets/images/carousel/2.jpg" alt="Banner 2" />
          </a>
        </slide>
        <slide>
          <a href="#" target="_blank" rel="noopener" class="carouselimg">
            <img src="assets/images/carousel/3.jpg" alt="Banner 3" />
          </a>
        </slide>
      </carousel>
    </section>

 <div class="loancalcicon" id="loancalcid" onClick="showpopup1()">
	    <img src="assets/images/calcicon.jpg">
  </div>
   <div class="loancalcicon" id="wtsapshareid" onClick="wtsapsharehandle()" style="top:60%">
	    <img src="assets/images/whatsapicon.png">
  </div>
  <div class="popup" id="popupid1" >
	  <div class="closeicon popupody" id="closeiconid">
		<span class="" onClick="hidepopup1()">x</span>
		  </div>
		  <div class="formdata">
				  <label>Enter Amount:</label><br />
				  <input type="text" id="initamtid" name="name" size="12" maxlength="32" value="300000" /><br /><br />
				  <label>Rate of Intrest</label><br />
				  <input type="text" id="roiid" name="roi" size="4" value="12" />%<br /><br />
					<label>Enter Tenure in Years</label><br />
				  <input type="text" id="tenureid" name="tenure" size="4" maxlength="12" value="3"/><br /><br />
				  <input type="submit" class="btn btn-primary btn-sm" value="Calculate!" onClick="calcval()"/><br /><br />
				  <label>Final Amount will be</label><br />
				  <input type="text" name="finalamt" id="finalamtid" size="16" maxlength="12" disabled/><br />
		  </div>
	  </div>



    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container hero-content">
        <h1>Find Your Dream Property</h1>
        <p class="hero-subtitle">Discover the perfect home, apartment, or commercial space in India. Buy, sell, or rent with confidence on 1Guntha.</p>
        <div class="hero-search">
          <div class="search-tabs">
            <button [class.active]="searchType === 'buy'" (click)="searchType = 'buy'">Buy</button>
            <button [class.active]="searchType === 'rent'" (click)="searchType = 'rent'">Rent</button>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Search by location, city, or locality..." [(ngModel)]="searchQuery" />
            <button class="btn btn-primary" (click)="goToSearch()">
              <span>🔍</span> Search
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="services-section" aria-label="Home improvement services">
      <div class="container service-cards-wrap">
        <h2 class="services-heading">Home services</h2>
        <p class="services-sub">Quality partners for POP, paint, electrical, construction, and more — request a quote in one tap.</p>
        <div class="service-cards-grid">
          <article class="service-card" *ngFor="let s of services">
            <div class="service-card-inner">
              <img [src]="'assets/images/' + s.img" [alt]="s.title" class="service-card-icon" width="56" height="56" loading="lazy" />
              <h3 class="service-card-title">{{ s.title }}</h3>
              <p class="service-card-desc">{{ s.description }}</p>
              <button type="button" class="btn btn-primary btn-sm service-card-cta" (click)="openQuotePopup()">Get Quote</button>
            </div>
          </article>
        </div>
      </div>
    </section>

  
  <div class="popup" id="popupid">
	  <div class="closeicon popupody" id="closeiconid1" onClick="hidepopup()">
		<span class="">x</span>
		  </div>
		  <div class="formdata">
				 <form action="/action_page.php">
						<div class="mb-3 mt-3">
						<label for="name" class="form-label">Your Name: </label>
						<input type="name" size="12" class="form-control" id="name" placeholder="Enter name" name="namename">
					  </div>
					 
					  <div class="mb-3 mt-3">
						<label for="email"  class="form-label">Email: </label>
						<input type="email" size="12" class="form-control" id="email" placeholder="Enter email" name="email">
					  </div>
					   
					  
					  <div class="mb-3 mt-3">
						<label for="number"  class="form-label">Your Mobile Number: </label>
						<input type="number" size="12" class="form-control" id="number" placeholder="Enter number" name="number">
					  </div>
					   

					  <label for="comment" class="form-label">Comments: </label>
						<textarea class="form-control" rows="5" id="comment" name="text"></textarea>
					  

					  <!-- <a href="https://wa.me/8585838365" class="whatsapp-button" target="_blank" rel="noopener noreferrer">
						  <i class="fa fa-whatsapp"></i>
						  <span>Enquiry on WhatsApp</span>
						</a> -->
						<br/>
						<button onclick="send_handle()" class="btn btn-success">Enquiry on WhatsApp</button>
					</form>
				
		  </div>
	  </div>
	  
	  
 

    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">🏠</div>
            <div class="stat-value">10,000+</div>
            <div class="stat-label">Properties</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div class="stat-value">50,000+</div>
            <div class="stat-label">Happy Customers</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🏆</div>
            <div class="stat-value">500+</div>
            <div class="stat-label">Verified Agents</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⭐</div>
            <div class="stat-value">4.8/5</div>
            <div class="stat-label">Average Rating</div>
          </div>
        </div>
      </div>
    </section>

    <section class="categories-section">
      <div class="container">
        <h2 class="section-title">Browse by Category</h2>
        <div class="categories-grid">
          <a routerLink="/search" [queryParams]="{propertyType: 'HOUSE'}" class="category-card">
            <div class="category-icon">🏘️</div>
            <h5>Houses</h5>
            <p>Independent houses and villas</p>
          </a>
          <a routerLink="/search" [queryParams]="{propertyType: 'APARTMENT'}" class="category-card">
            <div class="category-icon">🏢</div>
            <h5>Apartments</h5>
            <p>Flats and apartments</p>
          </a>
          <a routerLink="/search" [queryParams]="{propertyType: 'LAND'}" class="category-card">
            <div class="category-icon">🌾</div>
            <h5>Land</h5>
            <p>Plots and land parcels</p>
          </a>
          <a routerLink="/search" [queryParams]="{propertyType: 'COMMERCIAL'}" class="category-card">
            <div class="category-icon">🏬</div>
            <h5>Commercial</h5>
            <p>Shops, offices, and more</p>
          </a>
        </div>
      </div>
    </section>


<div class="chart">
<img src="assets/images/chart.png" class="img-fluid">
</div>
    <section class="featured-section">
      <div class="container">
        <div class="section-header">
          <div>
            <h2 class="section-title">Featured Properties</h2>
            <p class="section-subtitle">Handpicked properties just for you</p>
          </div>
          <a routerLink="/search" class="btn btn-outline">View All</a>
        </div>
        <div class="grid grid-3" *ngIf="featured.length && !loading">
          <app-property-card *ngFor="let p of featured" [property]="p" />
        </div>
        <div class="grid grid-3" *ngIf="loading">
          <div class="card" *ngFor="let i of [1,2,3,4,5,6]">
            <app-skeleton-loader height="200px" radius="var(--radius-lg) 0 0 var(--radius-lg)"></app-skeleton-loader>
            <div style="padding: 1rem;">
              <app-skeleton-loader height="24px" width="80%" style="margin-bottom: 0.5rem;"></app-skeleton-loader>
              <app-skeleton-loader height="16px" width="60%"></app-skeleton-loader>
            </div>
          </div>
        </div>
        <p *ngIf="!loading && !featured.length" class="empty-state">No featured properties available at the moment.</p>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <h2>Ready to List Your Property?</h2>
          <p>Join thousands of property owners on 1Guntha and reach millions of potential buyers across India</p>
          <a routerLink="/signup" class="btn btn-primary btn-lg">Get Started Free</a>
        </div>
      </div>
    </section>
    
  `,
  styles: [`
    :host { display: block; }
    .home-carousel-wrap {
      margin-bottom: 1.5rem;
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-md);
    }
    .home-carousel-wrap ::ng-deep carousel { display: block; }
    .home-carousel-wrap ::ng-deep .carousel-inner,
    .home-carousel-wrap ::ng-deep .item,
    .home-carousel-wrap ::ng-deep slide { max-height: 220px; }
    .carouselimg {
      display: block;
      line-height: 0;
    }
    .carouselimg img {
      display: block;
      width: 100%;
      max-height: 220px;
      object-fit: cover;
    }
    .hero {
      position: relative;
      background: var(--primary-gradient);
      color: white;
      padding: 5rem 0 4.5rem;
      overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/></pattern></defs><rect width="60" height="60" fill="url(%23grid)"/></svg>');
      opacity: 0.5;
    }
    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      max-width: 950px;
    }
    .hero h1 {
      font-size: 3.75rem;
      font-weight: 800;
      margin-bottom: 1.25rem;
      color: white;
      line-height: 1.1;
      letter-spacing: -1px;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .hero-subtitle {
      font-size: 1.375rem;
      opacity: 0.95;
      margin-bottom: 3rem;
      line-height: 1.6;
      font-weight: 400;
    }
    .hero-search {
      background: white;
      border-radius: var(--radius-xl);
      padding: 2rem;
      box-shadow: var(--shadow-2xl);
      max-width: 900px;
      margin: 0 auto;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .search-tabs {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
      background: var(--bg);
      padding: 0.5rem;
      border-radius: var(--radius);
    }
    .search-tabs button {
      flex: 1;
      padding: 0.875rem 1.25rem;
      border: none;
      background: transparent;
      border-radius: var(--radius-sm);
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition);
      color: var(--text-secondary);
      font-size: 0.9375rem;
    }
    .search-tabs button.active {
      background: var(--primary-gradient);
      color: white;
      box-shadow: var(--shadow-md);
    }
    .search-box {
      display: flex;
      gap: 1rem;
      align-items: stretch;
    }
    .search-box input {
      flex: 1;
      padding: 1.125rem 1.5rem;
      color: var(--text);
      border: 2px solid var(--border);
      border-radius: var(--radius);
      font-size: 1rem;
      font-weight: 500;
    }
    .search-box input:focus {
      border-color: var(--primary);
      outline: none;
      box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
    }
    .search-box .btn {
      padding: 1.125rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      white-space: nowrap;
    }
    .stats-section {
      padding: 5rem 0;
      background: linear-gradient(to bottom, var(--surface) 0%, var(--bg) 100%);
      border-top: 1px solid var(--border-light);
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 2rem;
    }
    .stat-card {
      text-align: center;
      padding: 2.5rem 2rem;
      background: var(--surface);
      border-radius: var(--radius-lg);
      transition: var(--transition-slow);
      border: 2px solid var(--border-light);
      position: relative;
      overflow: hidden;
    }
    .stat-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--primary-gradient);
      transform: scaleX(0);
      transition: transform 0.3s;
    }
    .stat-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-xl);
      border-color: var(--primary-light);
    }
    .stat-card:hover::before {
      transform: scaleX(1);
    }
    .stat-icon {
      font-size: 3.5rem;
      margin-bottom: 1.25rem;
      filter: drop-shadow(0 4px 8px rgba(14, 165, 233, 0.2));
    }
    .stat-value {
      font-size: 3rem;
      font-weight: 800;
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
      line-height: 1;
    }
    .stat-label {
      color: var(--text-muted);
      font-weight: 600;
      font-size: 0.9375rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .categories-section {
      padding: 5rem 0;
      background: var(--surface);
    }
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 2rem;
    }
    .category-card {
      background: var(--surface);
      padding: 2.5rem 2rem;
      border-radius: var(--radius-lg);
      text-align: center;
      transition: var(--transition-slow);
      border: 2px solid var(--border);
      position: relative;
      overflow: hidden;
    }
    .category-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--primary-gradient);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .category-card:hover {
      border-color: var(--primary);
      transform: translateY(-6px);
      box-shadow: var(--shadow-xl);
    }
    .category-card:hover::after {
      opacity: 0.05;
    }
    .category-card > * {
      position: relative;
      z-index: 1;
    }
    .category-icon {
      font-size: 3.5rem;
      margin-bottom: 1.25rem;
      filter: drop-shadow(0 4px 8px rgba(14, 165, 233, 0.15));
    }
    .category-card h5 {
      margin-bottom: 0.75rem;
      color: var(--text);
      font-size: 1.25rem;
      font-weight: 700;
    }
    .category-card p {
      color: var(--text-muted);
      margin: 0;
      font-size: 0.9375rem;
    }
    .featured-section {
      padding: 4rem 0;
    }
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 2rem;
    }
    .cta-section {
      padding: 5rem 0;
      background: var(--primary-gradient);
      position: relative;
      overflow: hidden;
    }
    .cta-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
    }
    .cta-card {
      background: var(--surface);
      padding: 4rem 3rem;
      border-radius: var(--radius-xl);
      text-align: center;
      max-width: 750px;
      margin: 0 auto;
      box-shadow: var(--shadow-2xl);
      position: relative;
      z-index: 1;
      border: 1px solid var(--border-light);
    }
    .cta-card h2 {
      color: var(--text);
      margin-bottom: 1rem;
      font-size: 2.25rem;
      font-weight: 800;
    }
    .cta-card p {
      color: var(--text-muted);
      margin-bottom: 2.5rem;
      font-size: 1.1875rem;
      line-height: 1.6;
    }
      .loancalcicon{
	      width: 50px;
        height: 50px;
        position: fixed;
        left: 0px;
        top: 50%;
        display: flex;
      cursor:pointer;
      z-index:99;
    }

.popup1{
	width :50%;
	height : 90%;
	background-color: rgba(73, 73, 77, 0.78);
	z-index:99;
	position: absolute;
	display:none;
}
.closeicon1{
	width: 50px;
    height: 50px;
    position: absolute;
    right: 0px;
    top: 10px;
    display: flex;
	cursor:pointer;
	z-index:999;
	color: var(--footer-text);
	font-weight: bold;
	font-size:25pt;
}

.visibleok{
	display:block!important;
}


.popup{
	width : min(100%, 520px);
	height : 100%;
	background-color: rgba(15, 23, 42, 0.88);
	z-index:9999;
	position: fixed;
	display:none;
	right: 0;
	top: 0;
	left: auto;
}
.closeicon{
	width: 50px;
    height: 50px;
    position: absolute;
    right: 0px;
    top: 10px;
    display: flex;
	cursor:pointer;
	z-index:999;
	color: var(--footer-text);
	font-weight: bold;
	font-size:25pt;
}

.visibleok{
	display:block!important;
}

.hidepopup{
	display:none;	
}

.formdata{
	text-align: left;
	transform: translateY(5%);
  color: var(--text);
  margin: 0 auto;
  width: min(92%, 420px);
  background: var(--surface);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
}
.form-label{
	color: var(--text-muted);
}

.services-section {
  padding: 2.5rem 0 2rem;
  background: linear-gradient(180deg, var(--bg) 0%, var(--surface) 45%, var(--bg) 100%);
  border-block: 1px solid var(--border-light);
}
.service-cards-wrap {
  max-width: 1280px;
  margin: 0 auto;
}
.services-heading {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 800;
  text-align: center;
  margin: 0 0 0.5rem;
  color: var(--text);
}
.services-sub {
  text-align: center;
  color: var(--text-muted);
  max-width: 42rem;
  margin: 0 auto 1.75rem;
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  line-height: 1.55;
}
.service-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
  gap: 1.25rem;
  align-items: stretch;
}
.service-card {
  display: flex;
  min-width: 0;
}
.service-card-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.125rem 1.35rem;
  text-align: center;
  box-shadow: var(--shadow);
  transition: var(--transition);
}
.service-card-inner:hover {
  border-color: var(--primary-light);
  box-shadow: var(--shadow-md);
}
.service-card-icon {
  width: 52px;
  height: 52px;
  object-fit: contain;
  flex-shrink: 0;
}
.service-card-title {
  margin: 0.75rem 0 0.5rem;
  color: var(--text);
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 700;
  line-height: 1.25;
}
.service-card-desc {
  flex: 1 1 auto;
  margin: 0 0 1rem;
  color: var(--text-secondary);
  font-size: clamp(0.8125rem, 1.4vw, 0.9375rem);
  line-height: 1.5;
  text-wrap: pretty;
}
.service-card-cta {
  margin-top: auto;
  align-self: stretch;
  max-width: 200px;
}

.servicename{
	font-weight: bold !important;
}

.hidepopup{
	display:none;	
}
.chart{
text-align: center;
}
.chart img{
width : 80%;
}
    .empty-state {
      text-align: center;
      padding: 3rem;
      color: var(--text-muted);
    }
    .carouselimg img {
      transition: transform 0.25s ease;
    }
    .carouselimg img:hover {
      transform: scale(1.02);
    }
    @media (max-width: 768px) {

      .hero h1 { font-size: 2.5rem; }
      .hero-subtitle { font-size: 1.125rem; }
      .search-box { flex-direction: column; color: var(--text); }
      .section-header { flex-direction: column; align-items: flex-start; gap: 1rem; }

      .popup{
        width :100%;
        height : 100%;
        left: 0;
        right: 0;
      }
    }
  `],
})
export class HomeComponent implements OnInit {
  featured: Property[] = [];
  loading = true;
  searchType = 'buy';
  searchQuery = '';

  readonly services: { img: string; title: string; description: string }[] = [
    {
      img: 'poplogo.png',
      title: 'POP service',
      description:
        'Modern POP (Plaster of Paris) designs blend architectural elegance with functional lighting to transform any ceiling into a masterpiece.',
    },
    {
      img: 'paintlogo.png',
      title: 'Paint service',
      description:
        'The professional touch — transforming spaces with a stroke of perfection. Quality finishes that stand the test of time.',
    },
    {
      img: 'lightlogo.png',
      title: 'Electrical service',
      description:
        'We craft lighting solutions that transform ordinary spaces into extraordinary experiences. From concept to installation, brilliance in every corner.',
    },
    {
      img: 'constructionlogo.png',
      title: 'Construction & reconstruction',
      description:
        'Reconstruction restores what matters most — your space, your comfort, your peace of mind. We rebuild with precision, care, and craftsmanship you can trust.',
    },
    {
      img: 'doorlogo.png',
      title: 'Door and framing',
      description:
        'Precision-built doors and framing that define the character of every space — strength, style, and craftsmanship at every threshold.',
    },
    {
      img: 'tileslogo.png',
      title: 'Tiles service',
      description:
        'Exquisite design and superior quality for floors and walls — surfaces that inspire and endure.',
    },
    {
      img: 'hardwarelogo.png',
      title: 'Hardware service',
      description:
        'Premium fittings, fixtures, and accessories — from the smallest hinge to the grandest finish, quality you can see and feel.',
    },
    {
      img: 'fabrication.png',
      title: 'Fabrication service',
      description:
        'Precision-engineered metal and structural solutions — fabricated with skill, accuracy, and durability that stands the test of time.',
    },
    {
      img: 'furniturelogo.png',
      title: 'Furniture service',
      description:
        'Beautifully crafted pieces for warmth, character, and purpose — from custom designs to timeless classics built for generations.',
    },
  ];

  constructor(private api: ApiService, private router: Router, private cdr: ChangeDetectorRef) {}

  openQuotePopup(): void {
    const w = window as unknown as { showpopup?: () => void };
    w.showpopup?.();
  }

   slides: {image: string; text?: string}[] =  [
    {image: 'assets/images/nature/5.jpg'},
    {image: 'assets/images/nature/4.jpg'},
    {image: 'assets/images/nature/3.jpg'}
  ];
  showIndicator = true;
 
  switchIndicator(): void {
    this.showIndicator = !this.showIndicator;
  }

  ngOnInit() {
    
    this.api.get<Property[]>('/properties/public/featured').subscribe({
      next: (data) => {
        this.featured = Array.isArray(data) ? data : [];
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.cdr.markForCheck();
      },
    });
  }

  goToSearch() {
    const params: any = {};
    if (this.searchQuery) params.city = this.searchQuery;
    if (this.searchType === 'rent') params.listingType = 'RENT';
    else params.listingType = 'SALE';
    this.router.navigate(['/search'], { queryParams: params });
  }
}
