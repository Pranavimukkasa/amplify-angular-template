import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, AmplifyAuthenticatorModule],

  
})
export class AppComponent {
  title = 'amplify-angular-template';

    
  // constructor(public authenticator: AuthenticatorService) {
  //   Amplify.configure(outputs);
  // }
}
