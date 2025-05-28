import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer classname="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <h6 classname="footer-title">Services</h6>
          <a classname="link link-hover">Branding</a>
          <a classname="link link-hover">Design</a>
          <a classname="link link-hover">Marketing</a>
          <a classname="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 classname="footer-title">Company</h6>
          <a classname="link link-hover">About us</a>
          <a classname="link link-hover">Contact</a>
          <a classname="link link-hover">Jobs</a>
          <a classname="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 classname="footer-title">Legal</h6>
          <a classname="link link-hover">Terms of use</a>
          <a classname="link link-hover">Privacy policy</a>
          <a classname="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 classname="footer-title">Newsletter</h6>
          <fieldset classname="w-80">
            <label>Enter your email address</label>
            <div classname="join">
              <input
                type="text"
                placeholder="username@site.com"
                classname="input input-bordered join-item"
              />
              <button classname="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      
    </div>
  );
}
