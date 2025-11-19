
const websites = [
    "www.google.com",
    "www.msn.com",
    "www.amazon.co.in",
    "in.answers.yahoo.com",
    "en.m.wikipedia.com",
    "codehs.gitbooks.io",
    "www.coderanch.com"
]

const wwwsites = websites.filter(
    site => site.startsWith("www")
)

const totalwwwsites  = wwwsites.length;

console.log("All websites:", websites);
console.log("Sites starting with 'www':");
wwwsites.forEach(site => console.log(`- ${site}`));
console.log(`Total number of such sites: ${totalwwwsites}`);