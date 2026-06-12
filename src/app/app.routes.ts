import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { AboutUs } from './Components/about-us/about-us';
import { ContactUs } from './Components/contact-us/contact-us';
import { Carrer } from './Components/carrer/carrer';
import { Notfound } from './Components/notfound/notfound';
import { UserList } from './Components/user-list/user-list';
import { ProductList } from './Components/product-list/product-list';
import { UserDetails } from './Components/user-details/user-details';
import { PermanentJob } from './Components/permanent-job/permanent-job';
import { ContractJob } from './Components/contract-job/contract-job';
import { UplodeVideoa } from './Components/uplode-videoa/uplode-videoa';
import { uplodeGurdGuard } from './gurds/uplode-gurd-guard';
import { exitGurdGuard } from './gurds/exit-gurd-guard';

export const routes: Routes = [
    {path:'home', component:Home},
    {path:'aboutus',component:AboutUs},
    {path:'contactus', component:ContactUs,
        canDeactivate:[exitGurdGuard]
    },
    {path:'carrer',component:Carrer,
        children:[
            {path:'permanent',component:PermanentJob},
            {path:'contract',component:ContractJob}
        ]

    },
    {path:'user-list',component:UserList},
    {path:'product-list',
        loadComponent:()=>import('./Components/product-list/product-list').then((x)=>x.ProductList)

    },
{path:'Uploade-video',component:UplodeVideoa,
    canActivate:[uplodeGurdGuard]

},
    {path:'user-details/:id',component:UserDetails},
    {path:'',component:Home},
    {path:'**',component:Notfound}
];
