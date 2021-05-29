'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">black-dashboard-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminLayoutModule.html" data-type="entity-link">AdminLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminLayoutModule-6de596f35722ce18fb86c966b2730078"' : 'data-target="#xs-components-links-module-AdminLayoutModule-6de596f35722ce18fb86c966b2730078"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminLayoutModule-6de596f35722ce18fb86c966b2730078"' :
                                            'id="xs-components-links-module-AdminLayoutModule-6de596f35722ce18fb86c966b2730078"' }>
                                            <li class="link">
                                                <a href="components/ClinicComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClinicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClinicsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClinicsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MedicalsheetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MedicalsheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatientsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReportsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpecialistsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpecialistsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TreatmentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TreatmentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-67057f7b8396bf413a10fadd708fe9c9"' : 'data-target="#xs-components-links-module-AppModule-67057f7b8396bf413a10fadd708fe9c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-67057f7b8396bf413a10fadd708fe9c9"' :
                                            'id="xs-components-links-module-AppModule-67057f7b8396bf413a10fadd708fe9c9"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link">ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-b36ae6b0d786cad131d94dd9607f3e8d"' : 'data-target="#xs-components-links-module-ComponentsModule-b36ae6b0d786cad131d94dd9607f3e8d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-b36ae6b0d786cad131d94dd9607f3e8d"' :
                                            'id="xs-components-links-module-ComponentsModule-b36ae6b0d786cad131d94dd9607f3e8d"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangePswdDto.html" data-type="entity-link">ChangePswdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClinicDto.html" data-type="entity-link">ClinicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePatientDto.html" data-type="entity-link">CreatePatientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSpecialistAdminDto.html" data-type="entity-link">CreateSpecialistAdminDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSpecialistDto.html" data-type="entity-link">CreateSpecialistDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUpdateReportDto.html" data-type="entity-link">CreateUpdateReportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUpdateTreatmentDto.html" data-type="entity-link">CreateUpdateTreatmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MtsCreateUpdateDto.html" data-type="entity-link">MtsCreateUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MtsDto.html" data-type="entity-link">MtsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientDto.html" data-type="entity-link">PatientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReportDto.html" data-type="entity-link">ReportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TreatmentDto.html" data-type="entity-link">TreatmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCreateClinicDto.html" data-type="entity-link">UpdateCreateClinicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link">UserLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUpdateProfile.html" data-type="entity-link">UserUpdateProfile</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClinicService.html" data-type="entity-link">ClinicService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MtsService.html" data-type="entity-link">MtsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PatientService.html" data-type="entity-link">PatientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportService.html" data-type="entity-link">ReportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TreatmentService.html" data-type="entity-link">TreatmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadFileService.html" data-type="entity-link">UploadFileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthService.html" data-type="entity-link">AuthService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/RouteInfo.html" data-type="entity-link">RouteInfo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});