import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Navbar from './navbarFooter/Navbar';
import Footer from './navbarFooter/Footer';
import AddCompany from './home/AddCompany';
import Company from './company/Company';
import AdminAccueil from './Admin/manageNotifications/AdminAccueil';
import NewCompany from './Admin/manageNotifications/NewCompany';
import Quiz from './quiz/Quiz';
import PageContact from './contact/PageContact';
import PendingComment from './Admin/manageNotifications/PendingComment';
import AddCompanyByAdmin from './Admin/manageCompanies/AddCompanyByAdmin';
import ManageCompanyByAdmin from './Admin/manageCompanies/ManageCompanyByAdmin';
import CompanyAdmin from './Admin/manageCompanies/CompanyAdmin';
import UpdateCompanyByAdmin from './Admin/manageCompanies/UpdateCompanyByAdmin';
import DeleteCompanyByAdmin from './Admin/manageCompanies/DeleteCompanyByAdmin';
import LegalNotice from './home/LegalNotice';
import SignIn from './authentification/SignIn';
import PrivateRoute from './authentification/PrivateRoute';
import AddManager from './Admin/manageCompanies/AddManager';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addCompany" component={AddCompany} />
        <Route path="/laisser-un-avis" component={Quiz} />
        <Route path="/contactez-nous" component={PageContact} />
        <Route path="/company/:id" component={Company} />
        <Route path="/mentions-legales" component={LegalNotice} />
        <Route path="/admin/signin" component={SignIn} />
        <PrivateRoute path="/admin/accueil" component={AdminAccueil} />
        <PrivateRoute path="/admin/entreprise" component={NewCompany} />
        <PrivateRoute path="/admin/validation" component={PendingComment} />
        <PrivateRoute path="/admin/message" component={NewCompany} />
        <PrivateRoute exact path="/admin/managecompany" component={ManageCompanyByAdmin} />
        <PrivateRoute exact path="/admin/managecompany/company/:id/addmanager" component={AddManager} />
        <PrivateRoute exact path="/admin/managecompany/company/:id" component={CompanyAdmin} />
        <PrivateRoute path="/admin/managecompany/company/:id/update" component={UpdateCompanyByAdmin} />
        <PrivateRoute path="/admin/managecompany/company/:id/delete" component={DeleteCompanyByAdmin} />
        <PrivateRoute path="/admin/managecompany/addcompany" component={AddCompanyByAdmin} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
