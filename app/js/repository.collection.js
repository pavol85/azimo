import Repository from './repository.model'

export default class RepositoryCollection {

    constructor(repositoryDefinitions = []) {
        this.repositoryInstances = repositoryDefinitions.map(repoDefinition => {
            return new Repository(
                repoDefinition.id,
                repoDefinition.name,
                repoDefinition.author,
                repoDefinition.starCount
            );
        })
    }
    
    toArray() {
        return this.repositoryInstances.map(repoInstance => repoInstance.getRaw());
    }

    toHtml() {
        return this.repositoryInstances.map(repoInstance => {
                    return `<li>${repoInstance.toHtml()}</li>`;
                }).join("");
    }
}