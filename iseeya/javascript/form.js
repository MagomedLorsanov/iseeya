function initialDataStructure(count, last_visit, tablename, user_text, status, ip,
	canvasfingerprint, usr_hash, scrn_sz, usr_agent, sameUser,
	Referer, rowNumber, className, setDisplay) {

	$(className).append(`
	  <div class="table_data">
		  <span>
			  <input type="checkbox" data-u_hash="${sameUser}">
		  </span>
		  <span>
			  <a onclick="return false;" data-name="1" data-u_hash="${sameUser}" class="remind remindBtn blockUser" title="Заблокировать и клиента и номер телефона">
				  <i class="fas fa-ban"></i>
			  </a>
			  <a onclick="return false;" data-name="0" data-u_hash="${sameUser}" class="remind remindBtn unblockUser" title="Разблокировать и клиента и номер телефона">
				  <i class="fas fa-undo-alt"></i>
			  </a>
			  <a data_cnvs="${sameUser}" data_count="${count}" data_ip="${ip}" class="remind userList ${setDisplay}" title="Просмотреть список посещений клиента">
				  <i class="fas fa-user-circle"></i>
			  </a>
		  </span>
		  <span>
			  ${rowNumber}
		  </span>
		  <span class="tabl_md">
			  ${count}<p class="user_tablename">&nbsp;- ${tablename}</p>
		  </span>
		  <span>
			  ${last_visit}
		  </span>
		  <span>
			  ${user_text ? user_text : "Пусто"}
		  </span>
		  <span id="u_status">
			  ${status == 1 ? status = "Да" : status = "Нет"}
		  </span>
		  <span>
			  ${ip}
		  </span>
		  <span id="u_finger" data_u_sameUser="${sameUser}">
			  ${canvasfingerprint}
		  </span>
		  <span>
			  ${usr_hash}
		  </span>
		  <span>
			  ${Referer}
		  </span>
		  <span>
			  ${scrn_sz}
		  </span>
		  <span>
			  ${usr_agent}
		  </span>
	  </div>
  `);
}