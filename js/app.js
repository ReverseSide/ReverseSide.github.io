var app = angular.module('myCV', ['pascalPrecht.translate' ,'noCAPTCHA'] );

app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.useSanitizeValueStrategy(null);
  $translateProvider.translations('en', {
    Title: 'Resume - Vincent Montet',
    Resume: 'Resume',
    Profile :'Profile',
    Abilities :'Abilities',
    Projets :'Projects',
    About_me :'About me',
    Details :'Details',
    Name :'Name',
    Years :'Years',
    Locations : 'Location',
    About_me_detail : 'I am an allround web developer. I am a junior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you\'ll learn faster and more. As the saying goes: \'two heads are better than one\'.',
    Skills: 'Skills',
    Programmation_Skills: 'Programmation Skills',
    Admin_Skills: 'Skills Server & Adiminstration',
    Other: 'Other',
    Tools: 'Tools',
    Languages: 'Languages',
    French: 'French',
    English: 'English',
    German: 'German',
    Mothertongue: 'Mother Tongue',
    Scolar: 'Scolar',
    EpcnDetail: 'Scolar Site',
    Contact_me: 'Contact me',
    BUTTON_LANG_EN: 'English',
    BUTTON_LANG_FR: 'French'
  });

  $translateProvider.translations('fr', {
    Title: 'Curriculum Vitae - Vincent Montet',
    Resume: 'Curriculum Vitae',
    Profile :'Profil',
    Abilities : 'Aptitudes',
    Projects : 'Projets',
    About_me :'Présentation',
    Details :'Détail',
    Name :'Nom',
    Years :'Age',
    Locations : 'Habite',
    About_me_detail : 'Je suis un jeune informaticien passionné par le développement web. Je suis un programmeur Junior avec de bonne connaissance du Front-End. Curieux et autodidacte, j\'ai aquis un pannel de langage et technique de programmation. J\'aime la programmation ordrée et structurée, ce qui mène à d\'avantage de qualité. J\'aime cultivé le sens du détail et optimisé mes projets. J\'apprécie le travail en équipe, cela permet d\'apprendre plus rapidement et d\'avantage.',
    Skills: 'Compétences',
    Programmation_Skills: 'Compétences en programmation',
    Admin_Skills: 'Compétences Serveur & Adiminstration',
    Other: 'Autre',
    Tools: 'Outils',
    Languages: 'Langues',
    French: 'Français',
    English: 'Anglais',
    German: 'Allemand',
    Mothertongue: 'Langue Maternelle',
    Scolar: 'Scolaire',
    EpcnDetail: 'Site Scolar',
    Contact_me: 'Contactez moi',
    BUTTON_LANG_EN: 'Anglais',
    BUTTON_LANG_FR: 'Français'

  });

  $translateProvider.preferredLanguage('en');
}]);

app.constant('ListLangs', [
  {id: 1, key: 'French', langlvl:100, detail: 'Mothertongue'},
  {id: 2, key: 'English', langlvl:50, detail: 'Technique'},
  {id: 3, key: 'German', langlvl:25, detail: 'Scolar'}
]);

app.constant('ListProjects', [
  {id: 0, key: 'Epcn', detail: 'EpcnDetail', tag:'Web'},
  {id: 1, key: 'BoxEvent', detail: 'BoxEventDetail', tag:'Projet Pilote'},
  {id: 2, key: 'Microlabs', detail: 'MicrolabsDetail', tag:'Intranet'},
  {id: 3, key: 'OrderIT', detail: 'OrderITDetail', tag: 'Intranet'},
  {id: 4, key: 'LittleIndian', detail: 'LittleIndianDetail', tag: 'Mac OSX App, Swift2'}
]);

app.controller('MainController', function ($scope, $translate, ListLangs, ListProjects) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };

  $scope.userData = {
    forename: 'Vincent',
    middlename: 'Sébastien',
    name: 'Montet',
    age: 20
  };

  $scope.langs = ListLangs;
  $scope.AllProjects = ListProjects;
  $scope.skills_ProgWeb = [{
                        title: "CSS",
                        level: 4,},
                    {   title: "HTML",
                        level: 6,},
                    {   title: "JavaScript",
            			      level: 4,},
                    {   title: "MySQL",
            			      level: 5,},
                    {   title: "PHP",
            			      level: 6,},
                    {   title: "Twig",
            			      level: 5,}];

$scope.skills_ProgOther = [{
                        title: "Bat",
                        level: 4,},
                    {   title: "C++",
                        level: 3,},
                    {   title: "Objectiev-C",
                        level: 2,},
                    {   title: "LabVIEW",
                        level: 4,},
                    {   title: "PowerShell",
                        level: 3,},
                    {   title: "Python",
                        level: 3,},
                    {   title: "Shell",
                        level: 4,},
                    {   title: "Visual Basic [For App]",
                        level: 6,},
                    {   title: "Swift",
                        level: 2,}];
$scope.skills_AdminWin = [{
                      title: "Active Directory",
                      level: 4,},
                  {   title: "Domaine Name System",
                      level: 6,},
                  {   title: "Dynamic Host Configuration Protocol",
                      level: 4,},
                  {   title: "Group Policy Object",
                      level: 5,},
                  {   title: "Interet Information Services",
                      level: 6,},
                  {   title: "Microsoft Deployement Toolkit",
                      level: 5,},
                  {   title: "Microsoft SharePoint",
                      level: 4,},
                  {   title: "Microsoft SQL Server",
                      level: 3,},
                  {   title: "Microsoft Deployement Services",
                      level: 2,},
                  {   title: "Windows Server Update Services",
                      level: 4,}];
$scope.skills_AdminOther = [{
                      title: "Apache",
                      level: 6,},
                  {   title: "CentOS",
                      level: 4,},
                  {   title: "Debian",
                      level: 6,},
                  {   title: "GLPI",
                      level: 4,},
                  {   title: "OCS Inventory",
                      level: 5,}];

  $scope.tools = [{
                      title: "Adobe Illustrator",
              	      level: 5,
                  },
                  {
                      title: "Adobe Photoshop",
              	      level: 5,
                  },
                  {
                      title: "Atom Editor",
              	      level: 2,
                  },
                  {
                      title: "Mac OS X",
              	      level: 2,
                  },
                  {
                      title: "VMware Fusion",
              	      level: 2,
                  },
                  {
                      title: "VMware Workstation",
              	      level: 2,
                  },
                  {
                      title: "Windows",
                      level: 4,
                  },
                  {
                      title: "Windows Server",
              	      level: 5,
                  }];

});
/**
 * Ng-Repeat implementation working with number ranges.
 *
 * @author Umed Khudoiberdiev
 */
angular.module('myCV').directive('ngRepeatRange', ['$compile', function ($compile) {
    return {
        replace: true,
        scope: { from: '=', to: '=', step: '=' },

        link: function (scope, element, attrs) {

            // returns an array with the range of numbers
            // you can use _.range instead if you use underscore
            function range(from, to, step) {
                var array = [];
                while (from + step <= to)
                    array[array.length] = from += step;

                return array;
            }

            // prepare range options
            var from = scope.from || 0;
            var step = scope.step || 1;
            var to   = scope.to || attrs.ngRepeatRange;

            // get range of numbers, convert to the string and add ng-repeat
            var rangeString = range(from, to + 1, step).join(',');
            angular.element(element).attr('ng-repeat', 'n in [' + rangeString + ']');
            angular.element(element).removeAttr('ng-repeat-range');

            $compile(element)(scope);
        }
    };
}]);
