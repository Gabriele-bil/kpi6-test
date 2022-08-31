import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kpi-home-container', template: `
    <div class="w-100">
      <h1 class="p-5">Lorem Ipsum</h1>

      <div class="hero w-100">
        <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
          <h2>Lorem ipsum</h2>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>

      <div class="media-text row align-items-center justify-content-between w-100 mt-5 mx-0">
        <div class="col-12 col-md-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat lobortis urna in finibus.
            Donec et volutpat elit. Ut eget interdum nisl, in tristique lectus. Aenean ultrices aliquet tincidunt. Cras
            dignissim, sapien eu posuere ullamcorper, orci velit semper ligula, sit amet efficitur leo ante in purus.
            Nullam at tellus at elit cursus porta. In in odio felis. Nulla semper, sem id maximus imperdiet, lectus
            augue tempor libero, ut dignissim ex lorem in felis. Maecenas maximus maximus viverra. Aenean finibus
            gravida ante sed porttitor. Fusce id ante vitae libero placerat feugiat quis id neque. Fusce laoreet quis
            augue nec lacinia.
            Phasellus sagittis iaculis vulputate. Phasellus vehicula in odio eget commodo. Aenean vel quam ante. Duis
            eget felis eget dolor aliquam maximus ut sed lorem. In commodo nulla a massa maximus, et dapibus nulla
            malesuada. Sed eros lacus, elementum vel purus sed, facilisis pretium lacus. Nullam eu ultricies risus, id
            dapibus diam. Sed posuere magna eu nisl laoreet feugiat. Sed ultrices eu nunc eget iaculis. Sed luctus metus
            id est fermentum, a molestie mauris sodales. Nunc ullamcorper quis mauris id aliquet. Suspendisse id
            faucibus ligula. Sed vitae turpis luctus, scelerisque urna lobortis, suscipit lectus.
          </p>
        </div>

        <div class="col-12 col-md-6">
          <img src="assets/images/cat.jpg" alt="cat image" class="img-fluid">
        </div>
      </div>
    </div>
  `, styles: [`
    .hero {
      color: #fff;
      height: 300px;
      background: url("../../../../assets/images/hero-image.jpg") bottom no-repeat;
      background-size: cover;
    }
  `]
})
export class HomeContainerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
