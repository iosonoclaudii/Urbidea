import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <span>
        Developed by 
        <a href="https://github.com/iosonoclaudii" target="_blank" rel="noopener">
          Claudio Maldera
        </a>
        © {{currentYear}}
      </span>
    </footer>
  `,
  styles: [`
    .footer {
      text-align: center;
      padding: 15px;
      background-color: var(--urban-dark);
      color: var(--urban-light);
      box-shadow: 0 -4px 10px var(--urban-shadow);
      position: fixed;
      bottom: 0;
      width: 100%;
      font-size: 0.9rem;
    }
    .footer a {
      color: var(--urban-green);
      text-decoration: none;
      transition: color 0.3s;
    }
    .footer a:hover {
      color: var(--urban-accent);
      text-decoration: underline;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
