import UserDto from "../dto/user.entity";

type User = Pick<UserDto, 'pwd'|'userName'>

export default User