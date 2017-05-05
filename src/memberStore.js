import { observable } from 'mobx'

class MemberStore {
	@observable members = [];

	get completedmembersCount() {
    	return this.members.filter(
			member => member.completed === true
		).length;
    }

    add(data) {
		this.members.push({ 
			id: data.id,
			name: data.name,
            email: data.email
		});
	}
}

const memberStore = new MemberStore();