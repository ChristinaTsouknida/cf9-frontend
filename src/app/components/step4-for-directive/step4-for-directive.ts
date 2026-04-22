import { Component } from '@angular/core';
import { IPerson } from '../../shared/interfaces/person';

@Component({
  selector: 'app-step4-for-directive',
  imports: [],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {
  persons: IPerson[] = [
    {"firstname":"Goldie","lastname":"Salasar","email":"gsalasar0@rediff.com"},
    {"firstname":"Courtney","lastname":"Jendrich","email":"cjendrich1@upenn.edu"},
    {"firstname":"Rollie","lastname":"Reside","email":"rreside2@mac.com"},
    {"firstname":"Seana","lastname":"MacGilfoyle","email":"smacgilfoyle3@un.org"},
    {"firstname":"Findlay","lastname":"Dreghorn","email":"fdreghorn4@yelp.com"},
    {"firstname":"Nonah","lastname":"Pulteneye","email":"npulteneye5@51.la"},
    {"firstname":"Ajay","lastname":"Grisard","email":"agrisard6@virginia.edu"},
    {"firstname":"Alvera","lastname":"Dodamead","email":"adodamead7@aboutads.info"},
    {"firstname":"Pooh","lastname":"Gerdes","email":"pgerdes8@icq.com"},
    {"firstname":"Nap","lastname":"Rabl","email":"nrabl9@amazonaws.com"},
    {"firstname":"Kordula","lastname":"Windows","email":"kwindowsa@zdnet.com"},
    {"firstname":"Ame","lastname":"Mumbray","email":"amumbrayb@dedecms.com"},
    {"firstname":"Nathan","lastname":"Haley","email":"nhaleyc@vinaora.com"},
    {"firstname":"Yorker","lastname":"Caulkett","email":"ycaulkettd@eventbrite.com"},
    {"firstname":"Janina","lastname":"Stickler","email":"jsticklere@dyndns.org"},
    {"firstname":"Ripley","lastname":"Stutter","email":"rstutterf@washingtonpost.com"},
    {"firstname":"Suzy","lastname":"McGuggy","email":"smcguggyg@dailymotion.com"},
    {"firstname":"Valdemar","lastname":"Clutton","email":"vcluttonh@google.ru"},
    {"firstname":"Garth","lastname":"Castellan","email":"gcastellani@cmu.edu"},
    {"firstname":"Geoff","lastname":"Hambling","email":"ghamblingj@indiatimes.com"},
    {"firstname":"Feliks","lastname":"Groneway","email":"fgronewayk@bbc.co.uk"},
    {"firstname":"Aggy","lastname":"Grinikhinov","email":"agrinikhinovl@examiner.com"},
    {"firstname":"Cordelie","lastname":"Steutly","email":"csteutlym@yellowpages.com"},
    {"firstname":"Toiboid","lastname":"Scrimshire","email":"tscrimshiren@guardian.co.uk"},
    {"firstname":"Ennis","lastname":"Willshere","email":"ewillshereo@acquirethisname.com"},
    {"firstname":"Flynn","lastname":"Young","email":"fyoungp@slate.com"},
    {"firstname":"Madelina","lastname":"Eliasen","email":"meliasenq@kickstarter.com"},
    {"firstname":"Teresita","lastname":"Betty","email":"tbettyr@businesswire.com"},
    {"firstname":"Collin","lastname":"Crennan","email":"ccrennans@paypal.com"},
    {"firstname":"Sibyl","lastname":"Maryon","email":"smaryont@epa.gov"}
  ]  
}
