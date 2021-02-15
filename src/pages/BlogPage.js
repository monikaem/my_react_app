import React from "react";
import '../styles/Blog.css'



const articles = [
    {id: 0, text: 'Dieta ketogeniczna, inaczej nazywana dietą ketogenną lub po prostu keto jest dietą wysokotłuszczową i niskowęglowodanową.  Założeniem diety jest maksymalne ograniczenie spożycia węglowodanów w ciągu dnia do około 10% całego spożywanego pokarmu, co w praktyce przekłada się najczęściej na wartość  poniżej 50g na dobę.  Jednocześnie ten sposób żywienia zakłada także maksymalne zwiększenie udziału tłuszczu (kosztem odstawionych wędlowodanów) z zachowaniem odpowiednich proporcji białka. \n' +
            '\n' +
            'Podstawowym założeniem tej diety jest przestawienie organizmu na pobieranie energii z tłuszczy, a nie jak to robi zazwyczaj z węglowodanów (głownie glukozy), których przez ich maksymalne ograniczenie jest stanowczo za mało. Po kilku dniach od rozpoczęcia diety organizm zaczyna powoli przechodzić w stan ketozy, kiedy to produkuje ciała ketonowe, które pomagają mu pozyskiwać energię z metabolizowania tłuszczy. Stan przejścia organizmu w ten szczególny nienaturalny dla niego stan często odczuwany jest przez osoby na diecie jak grypa – wiąże się z bólem mięśni, silnym osłabieniem i bólami głowy. Jednak po 1-2 dniach tzw. keto-flu przechodzi, a poziom ciał ketonowych można łatwo zbadać za pomocą pasków ketonowych, które działają identycznie jak testy ciążowe. Paski wskazują na skali poziom obecności ciał ketonowych w naszym organizmie. Jeśli jest on odpowiednio wysoki – oznacza to, że właśnie zaczęliśmy funkcjonować w stanie ketozy. A czemu jest on nam potrzebny?', moreInfo: 'https://fitlabcatering.pl/dieta-ketogeniczna-podstawowe-informacje-o-trendzie-zywieniowym-keto/?gclid=EAIaIQobChMI87LzqKLs7gIVPgWiAx21Ngh0EAAYAyAAEgK1tvD_BwE', author: 'Joanna Nowak', title: 'Czym jest dieta ketogeniczna?'},
    {id: 1, text: 'Przed rozpoczęciem diety bezglutenowej bardzo ważna jest wcześniejsza konsultacja z lekarzem oraz wykonanie określonych badań. Na początku należy przeprowadzić diagnostykę i ustalić, czy to na pewno gluten jest przyczyną problemów zdrowotnych oraz jakie dolegliwości wywołuje. Trzeba  pamiętać, że nie wolno odstawiać glutenu, gdy wykonuje się badania w kierunku chorób związanych z jego nietolerancją, ponieważ uniemożliwia to ich wykrycie.\n' +
            '\n' +
            'Śledzenie stron związanych z celiakią oraz żywnością bez glutenu jest również bardzo dobrym rozwiązaniem przy rozpoczynaniu przygody z dietą bezglutenową. Pomaga to usystematyzować wiedzę, uniknąć wielu początkowych błędów oraz rozprawić się z glutenowymi mitami. Należy jednak zwrócić uwagę na to, by były to dość poważane w środowisku strony i najlepiej specjalizujące się jedynie w celiakii oraz żywności bezglutenowej. Źródłem wartym zapoznania jest portal Polskiego Stowarzyszenia Osób z Celiakią i na Diecie Bezglutenowej.', moreInfo: 'https://bezgluten.pl/blog/jak-przygotowac-sie-do-bezpiecznego-przejscia-na-diete-bezglutenowa', author: 'Tomasz Guzik', title: 'O diecie bezglutenowej słów kilka'}
]

const BlogPage = () => {

    return (
        <div className="articlesContainer">
            {articles.map(article => {
                return <article key={article.id}>
                    <h3>{article.title}</h3>
                    <h6 style={{color: 'gray'}}>{article.author}</h6>
                    <p>{article.text} <a href={article.moreInfo}>Czytaj więcej</a> </p>
                </article>
            })}
        </div>

    )
}


export default BlogPage;