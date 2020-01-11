
INSERT INTO `blog`.`article` (`id`, `act_name`, `title`, `content`, create_time) 
VALUES ("", "asd", "哈囉", "我想新增新文章啊!asd",NOW())
ON  DUPLICATE KEY
UPDATE 
title = "哈囉",
content = "我想新增新文章啊!恩恩asd",
edit_time = NOW()

 
